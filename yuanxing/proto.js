// 函数也是对象
function User(){};

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

// console.dir()可以显示一个对象的所有属性和方法
console.dir(User);
console.dir(hd);

// String,Number,Object
Object.prototype.zeng = function(){
	console.log("这里是object.portotype")
}

let hdr = new Object();
hdr.name = "tianxia";
console.dir(Object.prototype);
console.log(User.prototype.__proto__ == User.__proto__.__proto__);

let th = new User();
th.show();
th.zeng();