// 双向链表的特点:

// * 可以使用一个`head`和一个`tail`分别指向头部和尾部的节点

// * 每个节点都由三部分组成:前一个节点的指针`(prev)`/保存的元素`(item)`/后一个节点的指针`(next)`
// * 双向链表的第一个节点的`prev是null`
// * 双向链表的最后的节点的`next是null`


// 封装双向链表
function DoublyLinkedList() {
	// 内部类:节点类
	function Node(data) {
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
	DoublyLinkedList.prototype.append = function(data) {
		// 1. 根据data创建节点
		let newNode = new Node(data)

		// 2. 判断添加的是不是第一个节点
		if (this.length === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.prev = this.tail
			this.tail.next = newNode
			this.tail = newNode
		}

		// 3. length+1
		this.length += 1
	}

	// 2. 将链表转换成字符串
	// 2.1 toString方法
	DoublyLinkedList.prototype.toString = function() {
		return this.forwardString()
	}
	// 2.2 forwardString()返回正向遍历的节点字符串形式
	DoublyLinkedList.prototype.forwardString = function() {
		// 1. 定义变量，
		let current = this.head
		let resultString = ""

		// 2. 依次向后遍历
		while (current) {
			resultString += current.data + " "
			current = current.next
		}

		return resultString
	}
	// 2.3 backwordString()返回反向遍历的节点字符串形式
	DoublyLinkedList.prototype.backwardString = function() {
		// 1. 定义变量，
		let current = this.tail
		let resultString = ""

		// 2. 依次向前遍历
		while (current) {
			resultString += current.data + " "
			current = current.prev
		}

		return resultString
	}

	// 3. insert(position, element):向列表的特定位置插入一个新的项。
	DoublyLinkedList.prototype.insert = function(position, data) {
		// 1. 判断越界
		if (position < 0 || position > this.length) {
			return false
		}

		// 2. 创建新的节点
		let newNode = new Node(data)

		// 3. 插入
		if (this.length === 0) {
			// 链表为空时
			this.head = newNode
			this.tail = newNode
		} else if (position === 0) {
			// 输入的位置为第一个时
			this.head.prev = newNode
			newNode.next = this.head
			this.head = newNode
		} else if (position === this.length) {
			// 输入的位置为this.length时
			newNode.prev = this.tail
			this.tail.next = newNode
			this.tail = newNode
		} else {
			// 其他情况
			let current = this.head
			let index = 0

			while (index++ < position) {
				current = current.next
			}
			// 先对新节点的next和prev处理
			newNode.next = current
			newNode.prev = current.prev
			// 再对curuent前面节点的next指针进行处理
			current.prev.next = newNode
			// 最后对current的prev指针进行处理，后面两步的位置不能换，否者前面的值拿不到；
			// 不过用newNode.prev.next = newNode应该也可以
			current.prev = newNode
		}

		this.length += 1
	}

	// 4. get(position):获取对应位置的元素
	DoublyLinkedList.prototype.get = function(position) {
		// 1.越界判断
		if (position < 0 || position >= this.length) {
			return false
		}
		// this.length/2 >= position时从前往后
		// this.length/2 < position时从后往前
		if (this.length / 2 >= position) {
			let current = this.head
			let index = 0
			// 2.找到对应位置
			while (index++ < position) {
				current = current.next
			}
			return current.data
		} else {
			let current = this.tail
			let index = this.length - 1
			// 2.找到对应位置
			while (index-- > position) {
				current = current.prev
			}
			return current.data
		}
	}

	// 5. indexOf(element):返回元素在列表中的索引。如果列表中没有该元素则返回-1。
	DoublyLinkedList.prototype.indexOf = function(data) {
		let current = this.head
		let index = 0

		// 查找data对应的节点
		while (current) {
			if (current.data === data) {
				return index
			} else {
				current = current.next
				index += 1
			}
		}
		// 没有找到
		return -1
	}

	// 6. update(position):修改某个位置的元素
	DoublyLinkedList.prototype.update = function(position, data) {
		// 1.越界判断
		if (position < 0 || position >= this.length) {
			return false
		}
		// this.length/2 >= position时从前往后
		// this.length/2 < position时从后往前
		if (this.length / 2 >= position) {
			let current = this.head
			let index = 0
			// 2.找到对应位置
			while (index++ < position) {
				current = current.next
			}
			current.data = data
		} else {
			let current = this.tail
			let index = this.length - 1
			// 2.找到对应位置
			while (index-- > position) {
				current = current.prev
			}
			current.data = data
		}

		return true
	}

	// 7. removeAt(position):从列表的特定位置移除一项。
	DoublyLinkedList.prototype.removeAt = function(position) {
		// 1.越界判断
		if (position < 0 || position >= this.length) {
			return null
		}

		// 2. 判断节点的位置

		// 其他情况
		if (this.length / 2 >= position) {
			let current = this.head
			if (this.length === 1) {
				// 只有一个节点
				this.head = null
				this.tail = null
			} else if (position === 0) {
				// 位置在第一个的时候
				this.head.next.prev = null
				this.head = this.head.next
			} else if (position === this.length - 1) {
				// 位置在最后一个的时候
				this.tail.prev.next = null
				this.tail = this.tail.prev
			} else {
				let index = 0
				// 2.找到对应位置
				while (index++ < position) {
					current = current.next
				}
				current.prev.next = current.next
				current.next.prev = current.prev
			}
			this.length -= 1
			return current.data
		} else {
			let current = this.tail
			if (this.length === 1) {
				// 只有一个节点
				this.head = null
				this.tail = null
			} else if (position === 0) {
				// 位置在第一个的时候
				this.head.next.prev = null
				this.head = this.head.next
			} else if (position === this.length - 1) {
				// 位置在最后一个的时候
				this.tail.prev.next = null
				this.tail = this.tail.prev
			} else {
				let index = this.length - 1
				// 2.找到对应位置
				while (index-- > position) {
					current = current.prev
				}
				current.prev.next = current.next
				current.next.prev = current.prev
			}
			this.length -= 1
			return current.data
		}
	}
	
	// 8. remove(element):从列表中移除一项。
	DoublyLinkedList.prototype.remove = function(data){
		// 根据data获取下标
		let index = this.indexOf(data)
		//根据下标移除
		return this.removeAt(index)
	}
	
	// 9. isEmpty():如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
	DoublyLinkedList.prototype.isEmpty = function(){
		return this.length === 0
	}
	
	// 10. size():返回链表包含的元素个数。与数组的length属性类似。
	DoublyLinkedList.prototype.size = function(){
		return this.length
	}
	
	// 11. getHead()获取链表的第一个元素
	DoublyLinkedList.prototype.getHead = function(){
		return this.head.data
	}
	// 12. getTail()获取链表的最后一个元素
	DoublyLinkedList.prototype.getTail = function(){
		return this.tail.data
	}
}



let li = new DoublyLinkedList()
li.append('123')
li.append('abc')
li.append('456')
li.insert(3, 'tanhong')
li.insert(2, 'gt')
console.log(li)
console.log(li.toString())
console.log(li.forwardString())
console.log(li.backwardString())
console.log(li.get(1))
console.log(li.indexOf('123'))
// li.update(2,'fb')
// li.removeAt(2)
console.log(li.toString())
console.log(li.removeAt(4))
console.log(li.remove('gt'))
console.log(li.toString())
console.log(li.isEmpty())
console.log(li.size())
console.log(li.getHead())
console.log(li.getTail())