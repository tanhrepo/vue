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
		// 1. 对position进行越界判断,可以等于length,相当于插入到最后
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
	
	
	// 4. get方法
	LinkedList.prototype.get = function(position){
		// 1.越界判断，不可以等于length
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
	
	//5. indexOf
	LinkedList.prototype.indexOf = function(data){
		let index = 0
		let current = this.head
		while(current){
			if(current.data === data){
				return index
			}else{
				current = current.next
				index += 1
			}
		}
		
		// 最后没有找到
		return -1
	}
	
	// 6. update(position，element):修改某个位置的元素
	LinkedList.prototype.update = function(position,data){
		// 1.越界判断
		if(position < 0 || position >= this.length){
			return false
		}
		
		// 2. 找到对应位置
		let index = 0
		let current = this.head
		while(index++ < position){
			current = current.next
		}
		// 3. 重新赋值
		current.data = data
		return true
	}
	
	
	// 7.removeAt(position):从列表的特定位置移除一项。
	LinkedList.prototype.removeAt = function(position){
		// 1.越界判断
		if(position < 0 || position >= this.length){
			return false
		}
		
		let current = this.head
		let previous = null
		let index = 0
		// 2. 移除
		if(position === 0){
			this.head = this.head.next
		}else{
			while(index++ < position){
				previous = current
				current = current.next
			}
			previous.next = current.next
		}
		// 3. 长度减一
		this.length -= 1
		
		return current.data
	}
	
	
	// 8. remove(element):从列表中移除一项。
	LinkedList.prototype.remove = function(data){
		// 1.获取元素位置
		let position = this.indexOf(data)
		
		// 2. 根据位置获取移除
		return this.removeAt(position)
	}
	// 8. remove(element):从列表中移除一项。
	// LinkedList.prototype.remove = function(data){
	// 	let index = 0
	// 	let current = this.head
	// 	let previous = null
	// 	while(current){
	// 		if(current.data === data){
	// 			// 如果在第一个
	// 			if(current === this.head){
	// 				this.head = this.head.next
	// 				this.length -= 1
	// 				return current.data
	// 			}else{
	// 				previous.next = current.next
	// 				return current.data
	// 				this.length -= 1
	// 			}
	// 		}else{
	// 			previous = current
	// 			current = current.next
	// 			index += 1
	// 		}
	// 	}
	//
	// 	return -1
	// }
	
	// 9. isEmpty():如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
	LinkedList.prototype.isEmpty = function(){
		return this.length === 0
	}
	
	// 10. size():返回链表包含的元素个数。与数组的length属性类似。 
	LinkedList.prototype.size = function(){
		return this.length
	}
}


// 测试代码
let list = new LinkedList()
list.append('efer')
list.append('12')
list.append(34234)
list.append('fdgd')
// list.append('abc')
// list.insert(3,'tanhong')
// list.insert(0,'1')
// list.update(1,'aaa')
console.log(list)
console.log(list.toString())
// console.log(list.get(4))//下标
// console.log(list.indexOf('abc'))
// console.log(list.indexOf('song'))
// console.log(list.removeAt(0))
// console.log(list.toString())
console.log(list.remove(0))
console.log(list.remove('12'))
console.log(list.toString())
console.log(list.isEmpty())
console.log(list.size())