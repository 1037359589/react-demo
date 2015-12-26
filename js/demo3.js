var HelloWorld=React.createClass({
	getInitialState:function(){
		return {
			clickCount:0
		}
	},
	handle:function(){
		this.setState({
			clickCount:++this.state.clickCount
		});
	},
	render:function(){
		return (
			<div>
			<h1>请点击我</h1>
			<button onClick={this.handle}>点我点我</button>
			<p>我被点击了:{this.state.clickCount}</p>	
			</div>
		)
	}
});
ReactDOM.render(<HelloWorld/>,document.getElementById('app'));