//子传父
//子
const cpn = {
	template:'#cpn',
	data(){
		return{
			categories:[
				{id:1,name:"生活用品"},
				{id:2,name:"手机平板"},
				{id:3,name:"轻薄电脑"},
				{id:4,name:"台式电脑"},
				{id:5,name:"家用电器"},
			]
		}
	},
	methods:{	
		btnClick(item){
			console.log(item)
		}
	}
}
//父
const app1 = new Vue({
	el:'#app1', 
	data:{
		message:"hello!!!!!!!",
	},
	components:{
		cpn
	},
	methods:{
		cpnClick(){
			
		}
	}
})