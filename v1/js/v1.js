var app1 = new Vue({
	el:"#app-1",
	data:{
		message:"hello!!",
		info:"tanhong",
		list:['haiwang','haizai','xingji','tanhong'],
		counter:0
	},
	methods:{
		add:function(){
			var that = this;
			console.log("add countinue");
			that.counter+=1;
			// that.counter+="数字增加了"
		},
		sub:function(){
			console.log("sub countion");
			this.counter--;
		}
	}
})