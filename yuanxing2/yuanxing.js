let hd = {name:"hd"};
let parent = {
		name:"parent",
		show(){
			console.log("tanhong " + this.name)
		},
	};

Object.setPrototypeOf(hd,parent)
console.dir(hd)

hd.show()//注意this指向
parent.show()

console.log(Object.getPrototypeOf(hd))

function User(name){
	this.name = name;
}

console.dir(User)
console.log(User.prototype.__proto__ == Object.prototype)//6
console.log(Object.prototype.constructor.constructor == User)//7
console.log(User.prototype.constructor == User)//8

// User.prototype.show = function(){//1. 在对象里面追加一个show属性
// 	console.log(this.name)
// }

User.prototype = {//2. 覆盖掉原来的
	constructor:User,//要将原来的属性添加上
	show(){
		console.log(this.name)
	}
}

let zhangsan = new User.prototype.constructor("张三")
let lisi = new User("李四")

console.log(zhangsan)
console.log(lisi)
lisi.show()
zhangsan.show()

