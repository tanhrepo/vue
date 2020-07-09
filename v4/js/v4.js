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