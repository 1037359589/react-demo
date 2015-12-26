var HelloWorld = React.createClass({
	displayName: 'HelloWorld',

	getInitialState: function () {
		return {
			clickCount: 0
		};
	},
	handle: function () {
		this.setState({
			clickCount: ++this.state.clickCount
		});
	},
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'请点击我'
			),
			React.createElement(
				'button',
				{ onClick: this.handle },
				'点我点我'
			),
			React.createElement(
				'p',
				null,
				'我被点击了:',
				this.state.clickCount
			)
		);
	}
});
ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('app'));