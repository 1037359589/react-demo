/*
数据绑定可由多种方式，详情请见官网；
必须加载react-with-addons.js
*/
var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function () {
    return { message: 'Hello!' };
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        '我想说:',
        this.state.message
      ),
      React.createElement('input', { type: 'text', valueLink: this.linkState('message') })
    );
  }
});
ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('app'));