const app1 = new Vue({
	el:"#app1",
	data:{
		message:'hello',
		imgUrl:'http://p3.pstatp.com/large/ced0008cd353a7157a0',
		aHref:'http://www.baidu.com',
	},
	methods:{
		created:function(){
			console.log('created');
		},
	}
})