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

