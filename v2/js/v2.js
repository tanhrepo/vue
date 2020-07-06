const app1 = new Vue({
	el:"#app1",
	data:{
		message:'hello',
		info:'kobe',
		lastname:'bryant',
		counter:100
	},
	methods:{
		created:function(){
			console.log('created')
		},
	}
})

const app2 = new Vue({
	el:"#app2",
	data:{
		message:'hello',
		url:'<a href="https://www.baidu.com">百度一下</a>'
	},
	methods:{
		created:function(){
			console.log('created')
		},
	}
})