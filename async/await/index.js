// 1.  同步
// 	异步
// 哪些是异步:1. 定时器2. ajax 3. 事件处理(绑定的onclick等) 4. node.js文件读取也有异步,
	
// 2. ajax问题

// console.log(1)
// $.ajax({
// 	url:"./aaa/aaa.css",
// 	success:function(res){
// 		console.log("2");
// 	},
// })
// console.log(3)
// 打印出来是132，因为ajax是异步的，不会等ajax执行完再执行后面的代码

// 3. 回调地狱
// 第一个ajax执行完后再调用第二个
// 两个ajax并行时不能确定是哪一个先完成，这个时候可以用嵌套
// 但是如果一直嵌套下去就会形成 回调地狱
// $.ajax({
// 	url:"./aaa/aaa.css",
// 	success:function(res){
// 		console.log("111");
// 		$.ajax({
// 			url:"./aaa/aaa.css",
// 			success:function(res){
// 				console.log("222");
// 				$.ajax({
// 					url:"./aaa/aaa.css",
// 					success:function(res){
// 						console.log("333");
// 						$.ajax({
// 							url:"./aaa/aaa.css",
// 							success:function(res){
// 								console.log("444");
// 							},
// 						})
// 					},
// 				})
// 			},
// 		})
// 	},
// })

// 4. Promise可以解决回调地狱
// let p1 = new Promise(function(resolve,reject){
// 	// resolve 是成功的函数
// 	// reject  是失败的函数
// })
// p1是new 的promise实例，他有固定的写法，
// p1.then(function(){},function(){})
// p1.then(成功的函数resolve，失败的函数reject)
// 一般情况只写成功的

// let p1 = new Promise(function(resolve,reject){
// 	// resolve 是成功的函数
// 	// reject  是失败的函数
// 	resolve(1)
// })

// p1.then(function(data){
// 	console.log("成功",data)
// })

// Promise和ajax
// let p1 = new Promise(function(resolve,reject){
// 	// resolve 是成功的函数
// 	// reject  是失败的函数
// 	$.ajax({
// 		url:"./aaa/aaa.css",
// 		success:function(res){
// 			// console.log("2");
// 			resolve(res)
// 		},
// 	})
// })

// p1.then(function(res){
// 	console.log("成功",res)
// 	let p2 = new Promise(function(resolve,reject){
// 		// resolve 是成功的函数
// 		// reject  是失败的函数
// 		$.ajax({
// 			url:"./aaa/aaa.css",
// 			success:function(res){
// 				// console.log("2");
// 				resolve(res)
// 			},
// 		})
// 	})
// 	return p2;
// }).then(function(res){
// 	console.log("cg",res)
// 	let p3 = new Promise(function(resolve,reject){
// 		// resolve 是成功的函数
// 		// reject  是失败的函数
// 		$.ajax({
// 			url:"./aaa/aaa.css",
// 			success:function(res){
// 				// console.log("2");
// 				resolve(res)
// 			},
// 		})
// 	})
// 	return p3;
// }).then(function(res){
// 	console.log("cg3",res)
// })
//好处 就是没有那么多的嵌套关系，是一个链式编程的结果

// axios
// function axios(){
// 	let p1 = new Promise(function(resolve,reject){
// 		// resolve 是成功的函数
// 		// reject  是失败的函数
// 		$.ajax({
// 			url:"./aaa/aaa.css",
// 			success:function(res){
// 				// console.log("2");
// 				resolve(res)
// 			},
// 		})
// 	})
// 	return p1;
// 	// axios返回一个promise
// }
// axios()  //调用axios函数，得到p1 new 的那个promise
// axios().then(function(res){
// 	console.log("jieguo",res)
// })


// axios就是把发送ajax用promise封装了一下
//点击发送ajax
// document.getElementById("btn").onclick = function(){
// 	axios().then(function(res){
// 		console.log("点击发送ajax",res);
// 	})
// }

// 箭头函数、async 、await
// async,await最简单的使用 可以省略掉.then 简单快捷
// document.getElementById("btn").onclick = async()=>{
// 	let res1 = await axios();//这里会等待成功，再执行下面的
// 	let res2 = await axios();//这里会等待成功，再执行下面的
	
// 	console.log("2点击发送ajax",res1,res2);
// }

// async函数就是Generator函数的语法糖	
// Generator是ES6提出的异步编程解决方案，语法行为与传统函数完全不同
// 形式上，Generator函数是一个普通函数，
// 但是有两个特征，一是function关键字与函数名之间有一个星号；二是函数体内部使用yield表达式，
// Generator 里面的代码是 分段执行 遇到yield就分一段
// function* helloworldGenerator(){
// 	yield 'hello';//yield 相当于一个暂停标记
// 	yield 'world';
// 	return 'ending';
// }

// var hw = helloworldGenerator();//hw返回一个指针
// console.log(hw)//这个函数的结果是ending吗？ 不是 因为代码是暂停的 得到的是一个暂停标记，指向hello

// console.log(hw.next())//指向hello的下一步就得到hello，next才能拿出这个暂停的值
// console.log(hw.next())//再下一步就拿到world
// console.log(hw.next())
// console.log(hw.next())//没有了就返回undefined

// async + await 原理就是Generator + yield



// Promise,Promise.all(),Promise.race();


// let p1 = new Promise(function(resolve,reject){
// 	// resolve 是成功的函数
// 	// reject  是失败的函数
// 	$.ajax({
// 		url:"./aaa/aaa.css",
// 		success:function(res){
// 			// console.log("2");
// 			resolve(res)
// 		},
// 	})
// })
// p1.then()

// Promise.all([数组],function(第二个参数函数){})
// Promise.all([p1,p2,p3...],function)
// Promise.all() 必须数组里面的所有的promise都执行完毕才成功
// Promise.race([数组],function(第二个参数函数){})
// Promise.race([p1,p2,p3...],function)
// Promise.race() 只要数组里面的任何一个promise执行成功了 整个 race就执行了


