/*
(1)注意点：不要在input里面加value，否则无法改变value，若非要value，必须增加onChange事件，才可以更改input的值;
(2)除了radio跟checkbox是defaultChecked,其他都是defaultValue;
更多事件处理见官网Event System
(3)用ref获取表单值，但是radio和checkbox用onChange更有利于获取值
*/
var Form = React.createClass({
	displayName: "Form",

	getInitialState: function () {
		return {
			inputValue: "input",
			selectValue: "2",
			radioValue: "radio",
			textValue: "textarea",
			checkValue: []
		};
	},
	handleValue: function (e) {
		// console.log(e.target);
		this.setState({
			inputValue: e.target.value
		});
	},
	handleSelect: function (e) {
		// console.log(e.target);
		this.setState({
			selectValue: e.target.value
		});
	},
	handleRadio: function (e) {
		this.setState({
			radioValue: e.target.value
		});
	},
	handleSubmit: function (e) {
		e.preventDefault;
		var formData = {
			username: this.refs['username'].getDOMNode().value,
			select: React.findDOMNode(this.refs['select']).value,
			radio: this.state.radioValue,
			check: this.state.checkValue
		};
		// console.log(e);
		console.log(formData.check);
	},
	handleChecked: function (e) {
		var check = this.state.checkValue.slice();
		var newV = e.target.value;
		if (check.indexOf(newV) == -1) {
			check.push(newV);
		} else {
			check.splice(check.indexOf(newV), 1);
		}
		this.setState({
			checkValue: check
		});
		console.log(newV, this.state.checkValue);
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
				React.createElement("input", { ref: "username", type: "text", name: "name", id: "name", tabindex: "1", defaultValue: this.state.inputValue, onChange: this.handleValue })
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
				React.createElement("input", { type: "radio", name: "radio-choice-1", id: "radio-choice-1", tabindex: "2", value: "choice-1", defaultChecked: true, onChange: this.handleRadio }),
				React.createElement(
					"label",
					{ "for": "radio-choice-2" },
					"Choice 2"
				),
				React.createElement("input", { type: "radio", name: "radio-choice-1", id: "radio-choice-2", tabindex: "3", value: "choice-2", onChange: this.handleRadio })
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
					{ name: "select-choice", id: "select-choice", defaultValue: this.state.selectValue, ref: "select" },
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
				React.createElement("input", { onChange: this.handleChecked, type: "checkbox", name: "checkbox", id: "checkbox", value: "1" }),
				React.createElement("input", { onChange: this.handleChecked, type: "checkbox", name: "checkbox", id: "checkbox", defaultChecked: true, value: "2" }),
				React.createElement("input", { onChange: this.handleChecked, type: "checkbox", name: "checkbox", id: "checkbox", value: "3" }),
				React.createElement("input", { onChange: this.handleChecked, type: "checkbox", name: "checkbox", id: "checkbox", value: "4" })
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