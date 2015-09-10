define(['intern/chai!assert',//expect
    'intern!object',//bdd
    'intern/order!../../../node_modules/jquery/dist/jquery',
    'intern/order!../../emCtrl',
    'intern/order!../../js/controls/emInit',
    'riot',
    'tags'
    ],function (assert,registerSuite) {
       registerSuite({
        name: 'unittest',
        testBtn: function(){
            em.init();
            assert.isDefined( em['em-btn'],'ok');
            var div= document.createElement('div');
            div.setAttribute('id','div1');
            document.body.appendChild(div);
            em.setElementTo('div1','em-btn',{id:'btn1'});
            assert.isAbove(em['em-btn'].length,0,'btn added');
        },
        textBPanel: function(){
             assert.isDefined(riot.mixin('emCtrlMixins'),'looks ok');
            em.setElementTo('div1','em-bpanel',{id:'bpanel1'});
            assert.isAbove(em['em-bpanel'].length,0,'bpanel from em');
        }
     });
});