/*
(1)注意点：不要在input里面加value，否则无法改变value，若非要value，必须增加onChange事件，才可以更改input的值;
(2)除了radio跟checkbox是defaultChecked,其他都是defaultValue;
更多事件处理见官网Event System
*/
var Form = React.createClass({
	displayName: "Form",

	getInitialState: function () {
		return {
			inputValue: "input",
			selectValue: "2",
			radioValue: "radio",
			textValue: "textarea"
		};
	},
	handleValue: function (e) {
		console.log(e.target);
		this.setState({
			inputValue: e.target.value
		});
	},
	handleSelect: function (e) {
		console.log(e.target);
		this.setState({
			selectValue: e.target.value
		});
	},
	handleSubmit: function (e) {
		e.preventDefault;
		console.log(e);
	},
	render: function () {
		return React.createElement(
			"form",
			{ action: "#", method: "post", onSubmit: this.handleSubmit },
			React.createElement(
				"div",
				null,
				React.createElement(
					"label",
					{ "for": "name" },
					"Text Input:"
				),
				React.createElement("input", { type: "text", name: "name", id: "name", tabindex: "1", value: this.state.inputValue, onChange: this.handleValue })
			),
			React.createElement(
				"div",
				null,
				React.createElement(
					"h4",
					null,
					"Radio Button Choice"
				),
				React.createElement(
					"label",
					{ "for": "radio-choice-1" },
					"Choice 1"
				),
				React.createElement("input", { type: "radio", name: "radio-choice-1", id: "radio-choice-1", tabindex: "2", value: "choice-1", defaultChecked: true }),
				React.createElement(
					"label",
					{ "for": "radio-choice-2" },
					"Choice 2"
				),
				React.createElement("input", { type: "radio", name: "radio-choice-1", id: "radio-choice-2", tabindex: "3", value: "choice-2" })
			),
			React.createElement(
				"div",
				null,
				React.createElement(
					"label",
					{ "for": "select-choice" },
					"Select Dropdown Choice:"
				),
				React.createElement(
					"select",
					{ name: "select-choice", id: "select-choice", value: this.state.selectValue, onChange: this.handleSelect },
					React.createElement(
						"option",
						{ value: "1" },
						"Choice 1"
					),
					React.createElement(
						"option",
						{ value: "2" },
						"Choice 2"
					),
					React.createElement(
						"option",
						{ value: "3" },
						"Choice 3"
					)
				)
			),
			React.createElement(
				"div",
				null,
				React.createElement(
					"label",
					{ "for": "textarea" },
					"Textarea:"
				),
				React.createElement("textarea", { cols: "40", rows: "8", name: "textarea", id: "textarea", value: this.state.inputValue, onChange: this.handleValue })
			),
			React.createElement(
				"div",
				null,
				React.createElement(
					"label",
					{ "for": "checkbox" },
					"Checkbox:"
				),
				React.createElement("input", { type: "checkbox", name: "checkbox", id: "checkbox", defaultChecked: true }),
				React.createElement("input", { type: "checkbox", name: "checkbox", id: "checkbox" }),
				React.createElement("input", { type: "checkbox", name: "checkbox", id: "checkbox" }),
				React.createElement("input", { type: "checkbox", name: "checkbox", id: "checkbox" })
			),
			React.createElement(
				"div",
				null,
				React.createElement("input", { type: "submit", value: "Submit" })
			)
		);
	}
});
ReactDOM.render(React.createElement(Form, null), document.getElementById("app"));