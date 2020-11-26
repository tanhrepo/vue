// add(value)∶向集合添加一个新的项。
// remove(value):从集合移除一个值。
// has(value):如果值在集合中，返回true，否则返回false。
// clear():移除集合中的所有项。
// size():返回集合所包含元素的数量。与数组的length属性类似。
// values():返回一个包含集合中所有值的数组。

function Set(){
	// 属性
	this.items = {}
	
	// 方法
	// 1. add(value)∶向集合添加一个新的项。
	Set.prototype.add = function(value){
		// 1. 判断集合里面是否有该元素
		if(this.has(value)){
			return false
		}
		
		// 2. 将元素添加到集合里面
		this.items[value] = value
		return true
	}
	
	// 2. has(value):如果值在集合中，返回true，否则返回false。
	Set.prototype.has = function(value){
		return this.items.hasOwnProperty()
	}
	
	// 3.  remove(value):从集合移除一个值。
	Set.prototype.remove = function(value){
		// 1. 判断集合里面是否有该元素
		if(!this.has(value)){
			return false
		}
		// 2.将元素删除
		delete this.items[value]
		return true
	}
	
	// 4. clear():移除集合中的所有项。
	Set.prototype.clear = function(){
		this.items = {}
	}
	
	// 5. size():返回集合所包含元素的数量。与数组的length属性类似。
	Set.prototype.size = function(){
		return Object.keys(this.items).length
	}
	
	// 6. values():返回一个包含集合中所有值的数组。
	Set.prototype.values = function(){
		return Object.keys(this.items)
	}
}
