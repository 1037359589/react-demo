/*
(1)注意点：不要在input里面加value，否则无法改变value，若非要value，必须增加onChange事件，才可以更改input的值;
(2)除了radio跟checkbox是defaultChecked,其他都是defaultValue;
更多事件处理见官网Event System
(3)用ref获取表单值，但是radio和checkbox用onChange更有利于获取值
*/
var Form=React.createClass({
	getInitialState:function(){
		return {
			inputValue:"input",
			selectValue:"2",
			radioValue:"radio",
			textValue:"textarea",
			checkValue:[]
		}
	},
	handleValue:function(e){
		// console.log(e.target);
		this.setState({
			inputValue:e.target.value
		});
	},
	handleSelect:function(e){
		// console.log(e.target);
		this.setState({
			selectValue:e.target.value
		});
	},
	handleRadio:function(e){
		this.setState({
			radioValue:e.target.value
		})
	},
	handleSubmit:function(e){
		e.preventDefault;
		var formData={
			username:this.refs['username'].getDOMNode().value,
			select:React.findDOMNode(this.refs['select']).value,
			radio:this.state.radioValue,
			check:this.state.checkValue
		};
		// console.log(e);
		console.log(formData.check);
	},
	handleChecked:function(e){
		var check=this.state.checkValue.slice();
		var newV=e.target.value;
		if(check.indexOf(newV)==-1){
			check.push(newV);
		}else{
			check.splice(check.indexOf(newV),1);
		}
		this.setState({
			checkValue:check
		});
		console.log(newV,this.state.checkValue);
	},
	render:function(){
		return (
			<form action="#" method="post" onSubmit={this.handleSubmit}>
					<div>
						<label for="name">Text Input:</label>
						<input ref="username" type="text" name="name" id="name"  tabindex="1" defaultValue={this.state.inputValue} onChange={this.handleValue}/>
					</div>
				
					<div>
						<h4>Radio Button Choice</h4>
				
						<label for="radio-choice-1">Choice 1</label>
						<input type="radio" name="radio-choice-1" id="radio-choice-1" tabindex="2" value="choice-1" defaultChecked onChange={this.handleRadio}/>
				
						<label for="radio-choice-2">Choice 2</label>
						<input type="radio" name="radio-choice-1" id="radio-choice-2" tabindex="3" value="choice-2"  onChange={this.handleRadio}/>
					</div>
				
					<div>
						<label for="select-choice">Select Dropdown Choice:</label>
						<select name="select-choice" id="select-choice" defaultValue={this.state.selectValue} ref="select">
							<option value="1">Choice 1</option>
							<option value="2">Choice 2</option>
							<option value="3">Choice 3</option>
						</select>
					</div>
					
					<div>
						<label for="textarea">Textarea:</label>
						<textarea cols="40" rows="8" name="textarea" id="textarea" value={this.state.inputValue} onChange={this.handleValue}></textarea>
					</div>
					
					<div>
						<label for="checkbox">Checkbox:</label>
						<input onChange={this.handleChecked} type="checkbox" name="checkbox" id="checkbox" value="1"/>
						<input onChange={this.handleChecked} type="checkbox" name="checkbox" id="checkbox" defaultChecked value="2"/>
						<input onChange={this.handleChecked} type="checkbox" name="checkbox" id="checkbox" value="3"/>
						<input onChange={this.handleChecked} type="checkbox" name="checkbox" id="checkbox" value="4"/>
					</div>
				
					<div>
						<input type="submit" value="Submit"/>
					</div>
				</form>	
		)
	}
});


ReactDOM.render(<Form/>,document.getElementById("app"));


