const app = new Vue({
	el:"#app",
	data:{
		message:'hello',
	},
	methods:{
		created:function(){
			console.log('created')
		},
	}
})
