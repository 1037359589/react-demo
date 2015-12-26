var HelloWorld=React.createClass({
	    	handle:function(){
	    		alert('你点了我一下！！');
	    	},
	    	render:function(){
	    		return (
	    			<div onClick={this.handle}>
	    				你好世界,hahahaasdasdasdasdsaasdsah！
	    			</div>
	    			)
	    	}
	    });
		ReactDOM.render(<HelloWorld/>,document.getElementById('app'),function(){console.log("渲染完成了！！")});