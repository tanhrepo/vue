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