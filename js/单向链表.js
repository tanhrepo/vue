// 单向链表的封装
function LinkedList(){
	// 和优先级队列一样，需要一个封装一个节点的内部类，节点类
	function Node(data){
		this.data = data
		this.next = null
	}
	
	// 属性
	this.head = null
	this.length = 0
	
	// 方法
	// 1. 在末尾追加元素
	LinkedList.prototype.append = function(data){
		// 创建新的节点，判断链表是否为空，
		// 若是，直接添加，
		// 若不是的话，找到最后一个节点，最后一个节点的next指向新创建的这个节点
		
		// 1. 创建新的节点
		let newNode = new Node(data)
		
		// 2. 判断链表是否为空
		if(this.length === 0){
			this.head = newNode
		}else{
			// 找到最后一个节点
			let current = this.head
			// 判断current.next是否为空，若是说明在最后，
			while(current.next){
				current = current.next
			}
			// 最后一个节点的next指向新节点
			current.next = newNode
		}
		
		// 3. 链表长度加1
		this.length += 1
	}
	
	// 2. toString()方法
	LinkedList.prototype.toString = function(){
		// 1. 定义变量
		let current = this.head
		let resultString = '';
		
		// 2. 循环获取一个个节点
		while(current){
			resultString += current.data + ' '
			current = current.next
		}
		return resultString
	}
	
	// 3. insert方法	
	LinkedList.prototype.insert = function(position,data){
		// 1. 对position进行越界判断
		if(position < 0 || position > this.length){
			return false
		}
		
		// 2. 根据data创建新的节点
		let newNode = new Node(data)
		
		// 3. 插入
		// 如果插入的位置是第一个
		if(position === 0){
			newNode.next = this.head
			this.head = newNode
		}else{
			// 其他位置
			let index = 0
			let current = this.head
			let previous = null
			while(index++ < position){
				previous = current
				current = current.next
			}
			
			newNode.next = current
			previous.next = newNode
		}
		
		// 4.长度加1
		this.length += 1
		return true
	}
	
	
	// get方法
	LinkedList.prototype.get = function(position){
		// 1.越界判断
		if(position < 0 || position >= this.length){
			return null
		}
		
		// 2. 返回data
		let index = 0
		let current = this.head
		while(index++ < position){
			current = current.next
		}
		
		return current.data
	}
}


// 测试代码
let list = new LinkedList()
list.append('efer')
list.append('12')
list.append(34234)
list.append('fdgd')
list.append('abc')
list.insert(3,'tanhong')
list.insert(0,'1')
console.log(list)
console.log(list.toString())
console.log(list.get(4))
