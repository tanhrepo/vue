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
function axios(){
	let p1 = new Promise(function(resolve,reject){
		// resolve 是成功的函数
		// reject  是失败的函数
		$.ajax({
			url:"./aaa/aaa.css",
			success:function(res){
				// console.log("2");
				resolve(res)
			},
		})
	})
	return p1;
	// axios返回一个promise
}
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
document.getElementById("btn").onclick = async()=>{
	let res = await axios();//这里会等待成功，再执行下面的
	
	console.log("2点击发送ajax",res);
}

// async是Generator的语法糖	