// const的使用

// 注意一:一旦给const修饰的标识符被赋值后，不能修改
// const name = "tan";
// name = "abx";//不能重新赋值

// 注意二
// const name; //错误: const修饰的标识符必须赋值。

// 注意三：常量的含义是指向的对象不能修改，但是可以改变对象内部的属性。
// const obj = {
// 	name : 'tan',
// 	age : 21,
// 	height : 176,
// }
// console.log(obj);
// obj.name = 'hong',
// obj.age = 23,
// obj.height = 181,
// console.log(obj);

// 对象字面量的增强写法
// const obj = new Object()

// const obj = {
// 	name : 'tan',
// 	age : 21,
// 	run:function(){
// 		console.log('running');
// 	},
// 	eat:function(){
// 		console.log('eatting');
// 	}
// }

// 1.属性的增强写法
const name = 'why';
const age = '18';
const height = '181';
// ES5的写法
const obj1 = {
	name:name,
	age:age,
	height:height
}
console.log(obj1);
// ES6的写法
const abc1 = {
	name,
	age,
	height
}
console.log(abc1);

// 2.函数的增强写法
// ES5的写法
const obj2 = {
	run:function(){
		console.log('running');
	},
	eat:function(){
		console.log('eatting');
	}
}
obj2.run()
// ES6的写法
const abc2 = {
	run(){
		console.log('running');
	},
	eat(){
		console.log('eatting');
	}
}

abc2.eat()