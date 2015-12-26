var Content = React.createClass({
	displayName: 'Content',

	handle: function () {
		alert('你点了我一下！！');
	},
	render: function () {
		var nodes = [];
		for (var ii = 0; ii < 5; ii++) {
			nodes.push(React.createElement(Header, null));
		}
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ onClick: this.handle },
				'你好世界！'
			),
			nodes
		);
	}
});
var Header = React.createClass({
	displayName: 'Header',

	render: function () {
		return React.createElement(
			'div',
			null,
			'我是大师'
		);
	}
});
ReactDOM.render(React.createElement(Content, null), document.getElementById('app'), function () {
	console.log('渲染完成！！');
});