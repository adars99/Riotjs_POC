define(['intern/chai!assert',//expect
    'intern!object'
    ],function (assert,registerSuite) {
       registerSuite({
       
        'pageTest': function () {
            var url ='http://localhost:8003/index.html';
            var previousVal = 0;
            
			return this.remote
				.get(require.toUrl(url))
                .setFindTimeout(5000)
				.findByCssSelector('#text1 input')
				.click()
				 .type('Elaine')
                  .end()
                  .setFindTimeout(5000)
                 .findByCssSelector('#btn1 a')
                 .click()
                 .end()
                 .findByCssSelector('#list1')
				.findAllByTagName('li')
            .getVisibleText()
              .then(function(children){
                  assert.isAbove(children.length,3,'Added item ok')
                  }).end();
		}
        
     });
});