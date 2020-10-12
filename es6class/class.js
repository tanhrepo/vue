// 构造函数

// function Person(){
// 	this.name = "张三";
// 	this.age = 19;
// 	this.say = function(){
// 		console.log("hello")
// 	}
// }

// const lin = new Person;
// lin.say()
// console.log(lin.age)
// class 是es6的新语法 就是构造函数的另外一种写法 一种语法糖
class Person{
	constructor() {
	    this.name = "张三";
	    this.age = 19;
	}
	say(){
		console.log("hello")
	}
}

// let lin = new Person;
// lin.say()
// console.log(lin.age)

// 继承extends
// class 子 extends 父{
	
// }
class Teacher extends Person{
	// 完整写法
	// constructor() {
	// 	// 继承的constructor在首部要写super(),用来继承父类
	// 	super();
	// 	this.sex = "nv";
	// 	this.book = "shuming";
	// }
	
	// 简写
	sex = "nv"
	book = "shuming"
	hello(){
		console.log("hello2")
	}
}

let pi= new Teacher();
pi.say()
pi.hello()
console.log(pi.name)
console.log(pi.sex)
