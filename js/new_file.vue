<template>
</template>

<script>
	
		// new Vue()构造函数，生成一个vue实例
		// 初始化事件和生命周期
		
	// beforeCreate		实例初始化后，data observer和事件配置之前调用
	
	// created 			data已经初始化，计算属性 event、watch事件回调，但是dom树还没有挂载
	
		// Vue需要通过el的“选择器”找到对应的template。
		// 判断是否有el对象
			// 有:继续编译
			// 没有:停止编译,暂停生命周期,直到有执行vm.$mount(el),再继续下一步
		// 判断是否有template模板，
			// 有:将模板转化为render函数,通过render函数去渲染创建dom树.
			// 没有:将el控制的视图区域(外层html)当作模板来渲染.
			
	// beforeMount		在dom树挂载前被调用，render函数首次被调用，生成虚拟dom。
	// mounted
	// beforeUpdate
	// updated
	// beforeDestroy
	// destroyed
	
</script>

<style>
</style>
