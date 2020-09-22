// 函数也是对象
function User(){};

// console.dir()可以显示一个对象的所有属性和方法

User.__proto__.view = function(){
	console.log("user 的__proto__")
}
User.view()

User.prototype.show = function(){
	console.log("user 的prototype")
}

let hd = new User();
hd.show()
console.log(User.prototype==hd.__proto__)

console.dir(User);
console.dir(hd);