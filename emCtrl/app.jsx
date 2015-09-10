define(function(require){
 
  var React = require('react');
 
  function App() {
    this.AppView = React.createClass({
     getInitialState: function(){
     return {
          items: this.props.items
     }
  },
  start: function(){
    this.setState({items:list.reverse()});
  }
  ,
  componentWillMount: function(){
    this.setState({items: this.props.items})
  },
      render: function () {
        return (<div>
        <button onclick={this.start}>click</button>
          <ul>
             {
              this.state.items.map(function(item) {
                return <li key={item}>{item}</li>
              })
             }
          </ul>
          </div>
        );
      }
    });
  }
 
  App.prototype.init = function (arr) {
    React.render(<this.AppView items={arr} />, document.getElementById("listView"));
  };
 
  return App;
 
});