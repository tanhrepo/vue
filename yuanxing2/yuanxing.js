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
	this.show = function(){
		console.log(this.name)
	}
}

// 原型就是一个对象,只要是对象,那么他也有自己的原型
// prototype和__ptoto__都可以理解为原型,
// 把构造函数作为对象调用的时候我们可以用下面__proto__,他服务于他自己,
// 另外一个是我们通过构造函数new出来无数个对象的时候,
// 这时候无数个对象就使用prototype,
// 相比来说prototype的威力更强一点,因为它可以作用于无数个对象

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


function createByobject(obj,...args){
	const constructor = Object.getPrototypeOf(obj).constructor;
	console.log(constructor);
	console.log(constructor == User);//true
	return new constructor(...args);
}



let th = createByobject(lisi,'tanhong')
th.show();