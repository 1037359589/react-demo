/*
数据绑定可由多种方式，详情请见官网；
必须加载react-with-addons.js
*/
var HelloWorld = React.createClass({
  mixins:[React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  render: function() {
    return (
    	<div>
    	<h1>我想说:{this.state.message}</h1>
    	<input type="text" valueLink={this.linkState('message')} />
    	</div>
    	)
  }
});
ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('app'));