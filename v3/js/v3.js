const app1 = new Vue({
	el:"#app1",
	data:{
		message:'hello',
		imgUrl:'https://img30.360buyimg.com/pop/s590x470_jfs/t1/143291/38/1926/45199/5efd953dEa9dda02e/7b68b2bc46cc9fe1.jpg.webp'
	},
	methods:{
		created:function(){
			console.log('created')
		},
	}
})