// ES5里面的var是没有块级作用域的(if/for)
// ES6里面的let是有块级作用域的(if/for)

// ES5之前因为if和for都没有块级作用域的概念,所以在很多时候,我们都必须借助于function的作用域来解决
// 应用外面变量的问题.
// ES6中，加入了let，let它是有if和for的块级作用域。

// 1.变量作用域：变量在什么范围内是可用的。

// {
// 	var name = 'why';
// 	console.log(name);
// }
// console.log(name); 
//这个地方也可以调用大括号里面的变量

// 2.没有块级作用域引起的问题:if的块级
// var func;
// if(true){
// 	var name = 'tan';
// 	func = function(){
// 		console.log(name);//22行打印的
// 	}
// 	func()
// }
// //在外面很多地方都能把变量里面的值改掉
// name = 'hong';
// func()

// 3.没有块级作用域引起的问题:for的块级
var btns = document.getElementsByTagName('button');
for (var i=0;i<btns.length;i++){
	btns[i].addEventListener('click',function(){
		console.log('第' + i + '个按钮被点击');
	})
}