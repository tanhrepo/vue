// 队列的封装、
// 基于数组
function Queue(val){
	this.items = []
	
	// 方法
	// 1.将元素加入队列
	Queue.prototype.enqueue = function(enNum){
		this.items.push(enNum)
	}
	// 2.从队列中删除元素
	Queue.prototype.dequeue = function(){
		this.items.shift()
	}
	// 3.查看前端的元素
	Queue.prototype.front = function(){
		return this.items[0]
	}
	// 4.查看队列是否为空
	Queue.prototype.isEmpty = function(){
		return this.items.length === 0
	}
	// 5.查看队列中元素的个数
	Queue.prototype.size = function(){
		return this.items.length
	}
	// 6.toString方法
	Queue.prototype.toString = function(){
		// 和栈类似
		let resultString = '';
		for(let i = 0,j = this.items.length;i < j;i++){
			resultString += this.items[i] + ' '
		}
		return resultString
	}
}

// 使用队列
let queue = new Queue()
// 将元素加入队列
queue.enqueue(123);
queue.enqueue('abc');
queue.enqueue(34);
queue.enqueue(67);
console.log(queue)
// 删除队列前端元素
queue.dequeue()
console.log(queue)
console.log(queue.front())
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.toString())

// 击鼓传花
// 我们来修改一下这个游戏规则.
// 几个朋友一起玩一个游戏,围成一圈,开始数数,数到某个数字的人自动淘汰。
// 最后剩下的这个人会获得胜利,请问最后剩下的是原来在哪一个位置上的人?

// 封装一个基于队列的函数
// 参数：所有参与人的名字，基于的数字
// 结果：最终剩下一个人的名字
function Game(nameList,num){
	let queue = new Queue;
	
	// 1. 将所有的人放入队列中
	for(let i = 0,j = nameList.length;i<j;i++){
		
	}
}






// ACM的js输入输出
// let line 

// while(line = readline()) {
//     const arr = line.split(' ').map(item => parseInt(item))
    
//     console.log(arr.reduce((a,b) => a + b))
// }

// let input;
// while(input = readline()) {
//     let arr = input.split(' ');
//     if (arr.length == 2) {
//         console.log(Number(arr[0]) + Number(arr[1]));
//     }
// } 	