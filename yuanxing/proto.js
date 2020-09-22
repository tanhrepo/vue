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
// 向上调用User.prototype里面的show方法
th.zeng();
// 调用Object.prototype里面的zeng方法

let abc = {}//这个对象是由构造函数object创建的
console.dir(abc)
console.log("object",abc.__proto__ == Object.prototype)

let arr = []//new Array
console.log("array",arr.__proto__ == Array.prototype)

let str = ""//new String
console.log("string",str.__proto__ == String.prototype)

let bool = true;
console.log("bool",bool.__proto__ == Boolean.prototype)

let reg = /a/i;  //new RegExp
console.log("regexp",reg.__proto__ == RegExp.prototype)