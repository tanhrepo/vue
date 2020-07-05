// ES6里面一般使用let(变量)和const(常量),不用var
const obj ={
	message:"hello!!",
	info:"tanhong",
	list:['haiwang','haizai','xingji','tanhong'],
	counter:0,
}


const app1 = new Vue({
	el:"#app-1",//用于挂载要管理的元素
	// data:{  //定义数据,类型:object|function组件中data必须是一个函数）
	// 	message:"hello!!",
	// 	info:"tanhong",
	// 	list:['haiwang','haizai','xingji','tanhong'],
	// 	counter:0
	// },
	data: obj,
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
	},
	// 生命周期:事物诞生到消亡的整个过程
	created:function(){
		console.log('created')
	},
	mounted:function(){
		console.log('mounted')
	}
})

// 三秒后把message里面的值修改
setTimeout(function(){
	app1.message = "aini";
},3000);
