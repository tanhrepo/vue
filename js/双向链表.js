// 双向链表的特点:

// * 可以使用一个`head`和一个`tail`分别指向头部和尾部的节点

// * 每个节点都由三部分组成:前一个节点的指针`(prev)`/保存的元素`(item)`/后一个节点的指针`(next)`
// * 双向链表的第一个节点的`prev是null`
// * 双向链表的最后的节点的`next是null`


// 封装双向链表
function DoublyLinkedList(){
	// 内部类:节点类
	function Node(data){
		this.data = data
		this.prev = null
		this.next = null
	}
	
	// 属性
	this.head = null
	this.tail = null
	this.length = 0
	
	// 方法
	// 1. append方法
	DoublyLinkedList.prototype.append = function(data){
		// 1. 根据data创建节点
		let newNode = new Node(data)
		
		// 2. 判断添加的是不是第一个节点
		if(this.length === 0){
			this.head = newNode
			this.tail = newNode
		}else{
			newNode.prev = this.tail
			this.tail.next = newNode
			this.tail = newNode
		}
		
		// 3. length+1
		this.length += 1
	}
	
	// 2. 将链表转换成字符串
	// 2.1 toString方法
	DoublyLinkedList.prototype.toString = function(){
		return this.forwardString()
	}
	// 2.2 forwardString()返回正向遍历的节点字符串形式
	DoublyLinkedList.prototype.forwardString = function(){
		// 1. 定义变量，
		let current = this.head
		let resultString = ""
		
		// 2. 依次向后遍历
		while(current){
			resultString += current.data + " "
			current = current.next
		}
		
		return resultString
	}
	// 2.3 backwordString()返回反向遍历的节点字符串形式
	DoublyLinkedList.prototype.backwardString = function(){
		// 1. 定义变量，
		let current = this.tail
		let resultString = ""
		
		// 2. 依次向前遍历
		while(current){
			resultString += current.data + " "
			current = current.prev
		}
		
		return resultString
	}
	
	// 3. insert(position, element):向列表的特定位置插入一个新的项。
	DoublyLinkedList.prototype.insert = function(position,data){
		
	}
}

let li = new DoublyLinkedList()
li.append('123')
li.append('abc')
li.append('456')
console.log(li)
console.log(li.toString())
console.log(li.forwardString())
console.log(li.backwardString())