module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['gruntfile.js', 'scripts/*.js'],
      pkg: grunt.file.readJSON('package.json'),
      options: {
        globals: {
          jQuery: true,
        }
      }
    },
    bower: {
      install: {
        options: {
          targetDir: './lib',
          layout: 'byType',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    },
    serve: {
        options: {
            port: 8003
        }
    },
    watch: {
        files: ['./emCtrl/js/controls/tags/*.html'],
        tasks: ['riot:compile'],
        options: {
          livereload: true,
          nospawn: true
        }
    },
    riot: {
       compile: {
        options: {
					concat: true,
					modular: {
						type: 'umd',
						deps: [
							'riot',
							// {'lib/jquery': '$'},
						]
					}
				},
         src: 'emCtrl/js/controls/tags/*.html',
          dest: 'emCtrl/js/controls/tags.js'
      }
    },
     uglify: {
      options: {
            compress: {
              drop_console: true
            }
          },
          my_target: {
             files: {'emCtrl/emCtrl.min.js': ['emCtrl/em.js','emCtrl/js/controls/emInit.js','emCtrl/js/controls/tag.js']}
        }
     },
     requirejs: {
      compile: {
        options: {
          baseUrl: "emCtrl",
          mainConfigFile: "emCtrl/em.js",
          dir: "emCtrl/js", 
          findNestedDependencies: false,
          modules: [        
        {
            //module names are relative to baseUrl
            name: 'js/emInit',
            include: ['riot','tag','text']
        }
    ]
        }
      }
    },
    curl: {
      'node_modules/phantomjs2/phantomjs.zip': 'https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.0.0-windows.zip'
    },
    unzip: {
      'node_modules/phantomjs2': 'node_modules/phantomjs2/phantomjs.zip'
    },
    exec: {
      start_phantom2: {
        cmd: 'start cmd /k node_modules\\phantomjs2\\phantomjs-2.0.0-windows\\bin\\phantomjs.exe  --webdriver=4444'
      },
      start_test: {
        cmd: 'node_modules\\.bin\\intern-runner config=intern.conf.js'
      },
      start_watch: {
        cmd: 'start cmd /k npm start watch'
      }
    }

  });

 
  // grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-requirejs');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-bower-task');
  // grunt.loadNpmTasks('grunt-processhtml');
  // grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-riot');
  grunt.loadNpmTasks('grunt-curl');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['riot:compile','exec:start_watch','serve']);
  grunt.registerTask('settestenv', ['curl','unzip']);
  grunt.registerTask('test', ['exec:start_phantom2','exec:start_test']);
  
};