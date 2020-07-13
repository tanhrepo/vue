// 加上key可以让性能更好
// <li v-for="(item,index) in letters" :key="item">{{index+1}}-{{item}}</li>
const app1 = new Vue({
	el:"#app1",
	data:{
		message:'hello',
		letters:['A','B','D','C','E']
	},
	methods:{
		btnClick(){
			// 一、下面几种方法具备数据响应式
			// 1.push方法
			// this.letters.push('aaa');
			// this.letters.push('aaa','bbb','ccc');
			
			// 2.pop():删掉数组最后一个元素
			// this.letters.pop();
			
			// 3. shift():删掉数组里面的第一个元素
			// this.letters.shift();
			
			// 4.unshift():在数组最前面添加元素
			// this.letters.unshift('aaaa')
			// this.letters.unshift('aaaa','bbbb','cccc')
			
			// 5.splice:删除元素/插入元素/替换元素
			// 删除元素:第二个参数传入你要删除的元素(如果没有传，则删除后面的所有的元素)
			// const start = 2
			// this.letters.splice(start,this.letters.length-start)
			
			// 替换元素:第二个参数,表示我们要替换的几个元素,后面用于替换前面的元素
			// 从下标为1的元素开始,删掉3个元素,并插入4个元素
			// this.letters.splice(1,3,'m','n','j','k')
			
			// 插入元素:第二个参数,传入0,并且后面跟上要插入的元素
			// 从下标为2的元素开始,删掉0个元素,并插入2个元素
			// this.letters.splice(2,0,'tan','hong')
			
			// 6.sort():排序
			// this.letters.sort()
			
			// 7.reverse():倒序
			// this.letters.reverse()
			
			
			// 二、注意：通过索引值修改数组中的元素,没有数据响应式
			// this.letters[0] = 'bbbbbb';
			
			// vue里面的方法
			// set(要修改的对象,索引值,修改后的值)
			// Vue.set(this.letters,0,'aaaaaaaaaa')
			
			
			console.log(this.letters);
		}
	}
})