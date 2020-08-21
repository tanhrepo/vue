//父传子：props
//子
const cpn = {
	template:'#cpn',
	//数组里面写变量名字
	// props:['cmovies','cmessage'],
	props:{
		// 1.类型限制(支持string,number,boolen,array,object,date,function,symbol)
		// cmovies:Array,
		// cmessage:String,
		
		// 2.提供一些默认值
		cmovies:{
			type:Array,
			default:[1,2,3],
		},
		cmessage:{
			type:String,
			default:'aaaaaaaaaaa',
		}
	},
	data(){
		return{
			
		}
	},
	methods:{
		
	}
}
//父
const app1 = new Vue({
	el:'#app1',
	data:{
		message:"hello!!!!!!!",
		movies:['海贼王','火影','死神'],
	},
	components:{
		cpn
	}
})