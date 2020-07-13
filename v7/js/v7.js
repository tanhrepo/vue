// v-if、v-else-if、 v-else
// 这三个指令与JavaScript的条件语句if、else、 else if类似。
// Vue的条件指令可以根据表达式的值在DOM中渲染或销毁元素或组件

// v-if的原理:
// v-if后面的条件为false时,对应的元素以及其子元素不会渲染。
// 也就是根本没有不会有对应的标签出现在DOM中。


const app1 = new Vue({
	el:"#app1",
	data:{
		message:'hello',
		isShow:true,
		scoreLive:99,
	},
	computed:{
		result(){
			let showMessage='';
			if (this.scoreLive >= 90){
				showMessage = '优秀'
			}else if (this.scoreLive >= 80){
				showMessage = '良好'
			}else if (this.scoreLive >= 60){
				showMessage = '及格'
			}else if (this.scoreLive < 60){
				showMessage = '不及格'
			}
			return showMessage
		}
	}
})

const app2 = new Vue({
	el:"#app2",
	data:{
		isShow:true,
	},
})

const app3 = new Vue({
	el:"#app3",
	data:{
		isShow:true,
	},
})

const app4 = new Vue({
	el:"#app4",
	data:{
		message:'hello!!!!!',
		isShow:true,
	},
})