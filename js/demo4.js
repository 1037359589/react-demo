var Props=React.createClass({
	getInitialState:function(){
		return {
			says:[
				"我是小胖子",
				"他是大胖子",
				"还有个老胖子"
			],
		}
	},
	render:function(){
		return (
			<div>
			<h1>胖子的对话</h1>
			<h4>{this.props.message}\(^o^)/~</h4>
			<Children message={this.state.says}/>
			</div>
			)
	}
});
var Children=React.createClass({
	propTypes:{
		message:React.PropTypes.array.isRequired
	},
	getDefaultProps:function(){
			return {
				message:["我是胖子"]
			}
	},
	render:function(){
		var msg=[];
		this.props.message.forEach(function(say,index){
			msg.push(
				<p>第{index+1}胖子说：{say}</p>
				)
		});
		return (
			<div>{msg}</div>
			)
	}
});
var parentMsg="我才是真胖子！"
ReactDOM.render(<Props message={parentMsg}/>,document.getElementById('app'));