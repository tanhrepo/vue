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
		getcolor:function(index){
			this.current = index;
			console.log(index);
			
		}
	}
})