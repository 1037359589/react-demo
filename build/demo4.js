var Props = React.createClass({
	displayName: "Props",

	getInitialState: function () {
		return {
			says: ["我是小胖子", "他是大胖子", "还有个老胖子"]
		};
	},
	render: function () {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"胖子的对话"
			),
			React.createElement(
				"h4",
				null,
				this.props.message,
				"\\(^o^)/~"
			),
			React.createElement(Children, { message: this.state.says })
		);
	}
});
var Children = React.createClass({
	displayName: "Children",

	propTypes: {
		message: React.PropTypes.array.isRequired
	},
	getDefaultProps: function () {
		return {
			message: ["我是胖子"]
		};
	},
	render: function () {
		var msg = [];
		this.props.message.forEach(function (say, index) {
			msg.push(React.createElement(
				"p",
				null,
				"第",
				index + 1,
				"胖子说：",
				say
			));
		});
		return React.createElement(
			"div",
			null,
			msg
		);
	}
});
var parentMsg = "我才是真胖子！";
ReactDOM.render(React.createElement(Props, { message: parentMsg }), document.getElementById('app'));