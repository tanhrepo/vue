// v-on参数
// 当通过methods中定义方法,以供@click调用时,需要注意参数问题:
// 情况一:如果该方法不需要额外参数,那么方法后的()可以不添加。
// 		但是注意:如果方法本身中有一个参数,那么会默认将原生事件event参数传递进去
// 情况二:如果需要同时传入某个参数,同时需要event时,可以通过$event传入事件。


const app1 = new Vue({
	el:"#app1",
	data:{
		message:'hello',
	},
	methods:{
		btn1Click(){
			console.log("btn1Click");
		},
		btn2Click(event){
			console.log("btn2Click",event);
		},
	}
})