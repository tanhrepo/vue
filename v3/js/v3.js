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

const app2 = new Vue({
	el:"#app2",
	data:{
		message:'hello',
		active:'active',
		line:'line',
		isActive:true,
		isLine:true,
	},
	methods:{
		bColor:function(){
			console.log('变色');
			// this.isActive = !this.isActive;
			this.isLine = !this.isLine;
		},
		getclass:function(){
			return{active:this.isActive,line:this.isLine};
		},
		getclass2:function(){
			return[this.active,this.line]
		},
	}
})