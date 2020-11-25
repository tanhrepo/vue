// ### 优先级队列的特点:

// > - 我们知道,普通的队列`插入一个元素`,数据会被放在`队列后端`。并且需要前面所有的元素都处理完成后才会处理前面的数据。
// > - 但是优先级队列,在插入一个元素的时候会`考虑该数据的优先级`
// > - 和其他数据优先级`进行比较`
// > - 比较完成后,可以得出这个元素在队列中`正确的位置`.
// > - 其他处理方式,和基本队列的处理方式一样.

// ### 优先级队列主要考虑的问题:

// > - 每个元素不再只是一个数据,而且`包含数据的优先级`
// > - 在添加方式中,根据优先级放入正确的位置.

// 封装优先级队列
function PriorityQueue(){
	// 在优先级里面重新创建一个类,可以理解为内部类,一个节点有两个值，包在一起
	function QueueElement(element,priority){
		this.element = element;
		this.priority = priority;
	}
	
	// 封装属性
	this.items = []
	
	// 实现插入方法
	PriorityQueue.prototype.enqueue = function(element,priority){
		// 1. 创建QueueElement对象
		let queueElement = new QueueElement(element,priority)
		
		// 2. 判断队列是否为空
		if(this.items.length === 0){
			this.items.push(queueElement)
		}else{
			// add判断元素是否添加
			let add = false
			for(let i = 0,j = this.items.length;i<j;i++){
				if(queueElement.priority < this.items[i].priority){
					this.items.splice(i,0,queueElement)
					add = true
					break
				}
			}
			// 循环数组过后，优先级都没有比他小的，add就不会变，这个时候就放在最后面，直接push
			if(!add){
				this.items.push(queueElement)
			}
		}
	}
	
	// 其他的方法和普通队列一样
	// 2.从队列中删除元素
	PriorityQueue.prototype.dequeue = function(){
		return this.items.shift()
	}
	// 3.查看前端的元素
	PriorityQueue.prototype.front = function(){
		return this.items[0]
	}
	// 4.查看队列是否为空
	PriorityQueue.prototype.isEmpty = function(){
		return this.items.length === 0
	}
	// 5.查看队列中元素的个数
	PriorityQueue.prototype.size = function(){
		return this.items.length
	}
	// 6.toString方法
	PriorityQueue.prototype.toString = function(){
		// 和栈类似
		let resultString = '';
		for(let i = 0,j = this.items.length;i < j;i++){
			resultString += this.items[i].element + '-' + this.items[i].priority + ' '
		}
		return resultString
	}
	
}

// 测试代码
let pg = new PriorityQueue()

pg.enqueue('zhang',123)
pg.enqueue('li',111)
pg.enqueue('di',44)
pg.enqueue('fr',342)
pg.enqueue('11',3)
pg.enqueue('feng',123)

console.log(pg.toString())
console.log(pg)