//创建组件构造器对象

const cpnC1 = Vue.extend({
	template: `
	<div>
		<h2>这里是标题1(子)</h2>
		<p>这是内容11111111111</p>
		<p>这是内容22222222222</p>
	</div>
	`
})
const cpnC2 = Vue.extend({
	template: `
	<div>
		<h2>这里是标题2(父)</h2>
		<p>这是内容33333333333</p>
		<p>这是内容44444444444</p>
		<my-cpn1></my-cpn1>
	</div>
	`,
	// 在渲染的时候就会将<my-cpn1></my-cpn1>用里面的内容替换掉，将里面的东西渲染成render函数
	// 如果在外部调用<my-cpn1>就会找不到哪里注册了这个组件
	// 优先去局部组件找，如果局部组件没有找到就去全局组件找，还没有的话就会报错
	
	components:{
		//注册子组件
		myCpn1:cpnC1
	}
})
//注册组件(全局组件,可以在多个vue实例下面使用)
// Vue.component("my-cpn",cpnC1)
//创建组件构造器对象的语法糖，直接注册(内部也是会调用Vue.extend)
Vue.component('cpn',{
	template: `
	<div>
		<h2>这里是语法糖(全局)</h2>
		<p>这是内容11111111111</p>
		<p>这是内容22222222222</p>
	</div>
	`
})

//使用组件(必须挂载在某个vue实例下才可以使用)

const app = new Vue({
	el:"#app1",
	data:{
		message:"hello"
	},
	//注册局部组件
	components:{
		//注册父组件
		myCpn2:cpnC2
	}
})

const app2 = new Vue({
	el:"#app2", 
	components:{
		myCpn3:{
			template: `
			<div>
				<h2>这里是语法糖(局部)</h2>
				<p>这是内容11111111111</p>
				<p>这是内容22222222222</p>
			</div>
			`
		}
	}
})