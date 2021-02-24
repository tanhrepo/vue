// x,y   任意X 对应确定的Y   X就是自变量  Y就是X的函数
// Y = f(x)  数学
// 看成计算机的函数式编程 Y= function(参数) x值的范围就是函数的定义域，Y的范围就是函数的值域

// 函数式编程
// function y(a,b,c){
//   // 执行语句 
// }

// 如果有下面这一系列的代码

// if(3>0){
//   for(let i = 0;i < 10;i++){
//     console.log(i)
//   }
// }
// if(2>0){
//   for(let i = 0;i < 10;i++){
//     console.log(i)
//   }
// }
// if(1>0){
//   for(let i = 0;i < 10;i++){
//     console.log(i)
//   }
// }

// 会出现一个情况，重复的代码太多了；
// 耦合 ；评估代码重复量
// 编程的基础规范：高内聚，低耦合
// 高内聚：我们开发的一个功能或者说是一个模块，里面的代码相关性强，代码之间紧密联系度比较强，就会让这个模块或者这个功能的独立性就比较强。
// 我们希望让这个模块去独立完成任务，这个任务完成的好坏是和高内聚有密切关系的。
// 低耦合：我们希望把重复的代码抽象出来，提取出来后组成一个独立的功能体或者是一个模块，去完成一个特定的功能，高可复用。   

// 高内聚 低耦合的作用就是让一个代码块或者说一个模块有强的功能性,有高的独立性   [模块代码的单一责任制]
// 尽量避免功能体与功能体之间的相互依赖 

// 处理上面这种高耦合的代码,一般用的方法就是[解耦合]
// JavaScript里面解耦合最好的方法就是函数

// function test(){
//   for(let i = 0;i < 10;i++){
//     console.log(i)
//   }
// }
// if(3 > 0){
//   test();
// }
// if(2 > 0){
//   test();
// }
// if(1 > 0){
//   test();
// }

// 1. 最基本的函数写法 ----函数声明
// function 是引用类型 值的一种类型  用于声明函数的一种关键字
// 用function来声明了一个叫test的函数

// function test(参数){
//   函数的执行语句
// }

// 函数命名：一般使用小驼峰命名法  复合单词---myWonderfulTest

// function test(){
//   let a = 1,
//       b = 1;
//   console.log(a,b)
// }
// test();//1 1
// console.log(a) // Uncaught ReferenceError: a is not defined
// console.log(b) // Uncaught ReferenceError: b is not defined //局部变量，没有什么问题

// function test(){
//   let a = b = 1;
//   console.log(a,b)
// }
// test();
// console.log(a) // Uncaught ReferenceError: a is not defined
// console.log(b) // 1

// 上面这么写就会有些问题，我们可以看到在外部也可以访问到b,相当于
// function test(){
//   let a = b;
//   b = 1; // 这个时候是挂载到window上面的，相当于声明了一个全局变量
// }
// 所以声明变量的时候不要用连等 a = b = 1这种方法



// 2. 表达式    字面量
// let test = function test1(){
//   let a = 1,
//       b = 1;
//   console.log(a,b)
// }
// test(); // 1 1
// // test1(); // Uncaught ReferenceError: test1 is not defined
// console.log(test.name) // test1

// 上面这个过程是:我声明了一个test变量 把一个叫test1的function函数赋值给了test这个变量。
// 在声明变量时，把函数赋值给他，就赋予了他(test)函数的功能。所以test()可以正常的执行。
// 但是在后面的test1() ;这种的表达式赋值，是一个function的时候，他会自动忽略他的名字（test1）
// 所以test1的写与不写，对test函数的执行来说是没有影响的
// 但是写了test1，也并不是完全没有作用，比如说内部递归的时候

// let test = function test1(){
//   for(let i = 3;i>0;i--){
//     console.log(i);
//     if(i === 2){
//       test1;
//       // console.log(test1)
//     }
//   }
// }
// test(); // 3 2 1

// function后面的名字是可以被函数体内部调用的，但是外部不可见。