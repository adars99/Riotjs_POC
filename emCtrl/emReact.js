define(['react'], function(React) {
	var reactList = React.createClass({
		displayName:"reactList",
		 getInitialState: function(){
		     return {
		          items: this.props.items
		     };
		 },
		render:function(){
		var lis=[];
		 this.state.items.map(function(item) {
               lis.push( React.createElement('li', {key:item},item));
              });
			  var ul = React.createElement('ul', {},React.createElement('button',{onClick:this.setUpdate},'update'),lis);
		return ul;
	},
	setUpdate : function(){
		var x = new Date().getTime();
				  this.setState({items :list.reverse()});
				  setTimeout( function() {
					        $('#timer2').html( ' -  took ' + ( new Date().getTime() - x ) + 'ms');
					      }.bind( this ),0);
			  }
		});
	React.render(React.createElement(reactList,{items:list}),document.getElementById('listView'));
});