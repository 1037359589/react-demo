 var Content=React.createClass({
	    	handle:function(){
	    		alert('你点了我一下！！');
	    	},
	    	render:function(){
    			var nodes=[];
    			for(var ii=0;ii<5;ii++){
    				nodes.push(<Header/>)
    			}
	    		return (
	    			<div>
	    			<div onClick={this.handle}>
	    				你好世界！
	    			</div>
	    			{nodes}
	    			</div>
	    			)
	    	}
	    });
	    var Header=React.createClass({
	    	render:function(){
	    		return (
	    			<div>我是大师</div>
	    			)
	    	}
	    })
		ReactDOM.render(<Content/>,document.getElementById('app'),function(){
			console.log('渲染完成！！');
		});