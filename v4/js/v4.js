const app1 = new Vue({
	el:"#app1",
	data:{
		// active:'active',
		message:'hello',
		fsize1:'30px',
		fsize2:25,
		fcolor:'blue',
	},
	methods:{
		getStyles:function(){
			return{fontSize:this.fsize2+'px',color:this.fcolor}
		}
	}
})

const app2 = new Vue({
	el:"#app2",
	data:{
		// active:'active',
		message:'数组',
		baseStyle1:{backgroundColor:'red'},
		baseStyle2:{fontSize:'40px'},
		fsize1:'30px',
		fcolor:'blue',
	},
	methods:{
		getStyles:function(){
			return{fontSize:this.fsize2+'px',color:this.fcolor}
		}
	}
})

const app3 = new Vue({
	el:"#app3",
	data:{
		firstName:'Jake',
		lastName:'Rose',
		books:[
			{id:001,name:'代码大全',price:119},
			{id:002,name:'计算机原理',price:79},
			{id:003,name:'现代操作系统',price:159},
			{id:004,name:'路由交换技术',price:80},
		],
	},
	// computed:计算属性
	computed:{
		fullName:function(){
			return this.firstName + ' ' + this.lastName;
		},
		totalPrice:function(){
			// 方法一：
			// let result = 0
			// for(let i=0;i<this.books.length;i++){
			// 	result += this.books[i].price
			// }
			// return result
			// 方法二：
			let result = 0
			for(let i in this.books){
				result += this.books[i].price
			}
			return result
		}
	},
	methods:{
		getFullName:function(){
			return this.firstName + ' ' + this.lastName;
		}
	},
})