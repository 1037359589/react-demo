var HelloWorld = React.createClass({
	displayName: 'HelloWorld',

	handle: function () {
		alert('你点了我一下！！');
	},
	render: function () {
		return React.createElement(
			'div',
			{ onClick: this.handle },
			'你好世界,hahahaasdasdasdasdsaasdsah！'
		);
	}
});
ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('app'), function () {
	console.log("渲染完成了！！");
});