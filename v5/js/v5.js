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

// var name = 'why';
// function abc(bbb){
// 	console.log(bbb);
// }
// abc(name)
// name = 'hong'
// abc('aaaaaaaa')

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
// 点击按钮的时候系统回调函数,i值已经被改变
// ES5写法，var没有作用域，大家调用i值都是一样的值
// var btns = document.getElementsByTagName('button');
// for (var i=0;i<btns.length;i++){
// 	btns[i].addEventListener('click',function(){
// 		console.log('第' + i + '个按钮被点击');
// 	})
// }

// ES5伪代码
// function(){//i = 2
// 	console.log('第' + i + '个按钮被点击');
// }

// function(){//i = 2
// 	console.log('第' + i + '个按钮被点击');
// }

// function(){//i = 2
// 	console.log('第' + i + '个按钮被点击');
// }

// function(){
// 	console.log('第' + i + '个按钮被点击');
// }

// function(){
// 	console.log('第' + i + '个按钮被点击');
// }

// 老解决办法:用闭包,
// 为什么闭包可以将解决问题:函数是一个作用域
// var btns = document.getElementsByTagName('button');
// for (var i=0;i<btns.length;i++){
// 	(function(i){
// 		btns[i].addEventListener('click',function(){
// 			console.log('第' + i + '个按钮被点击');
// 		})
// 	})(i)
// }

// ES6的写法,将循环里面的var改成let就可以，let有作用域，自己作用域的变量值改变不影响其他变量值
const btns = document.getElementsByTagName('button');
for (let i=0;i<btns.length;i++){
	btns[i].addEventListener('click',function(){
		console.log('第' + i + '个按钮被点击');
	})
}

// ES6伪代码:
// {//i = 0
// 	btns[i].addEventListener('click',function(){
// 		console.log('第' + i + '个按钮被点击');
// 	})
// },
// {//i = 1
// 	btns[i].addEventListener('click',function(){
// 		console.log('第' + i + '个按钮被点击');
// 	})
// },
// {//i = 2
// 	btns[i].addEventListener('click',function(){
// 		console.log('第' + i + '个按钮被点击');
// 	})
// },
// {//i = 3
// 	btns[i].addEventListener('click',function(){
// 		console.log('第' + i + '个按钮被点击');
// 	})
// },
// {//i = 4
// 	btns[i].addEventListener('click',function(){
// 		console.log('第' + i + '个按钮被点击');
// 	})
// },
