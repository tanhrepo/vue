// x,y   任意X 对应确定的Y   X就是自变量  Y就是X的函数
// Y = f(x)  数学
// 看成计算机的函数式编程 Y= function(参数) x值的范围就是函数的定义域，Y的范围就是函数的值域

// 函数式编程
// function y(a,b,c){
//   // 执行语句 
// }

// 如果有下面这一系列的代码
if(3>0){
  for(let i = 0;i < 10;i++){
    console.log(i)
  }
}
if(2>0){
  for(let i = 0;i < 10;i++){
    console.log(i)
  }
}
if(1>0){
  for(let i = 0;i < 10;i++){
    console.log(i)
  }
}

// 会出现一个情况，重复的代码太多了；
// 耦合 ；评估代码重复量
// 编程的基础规范：高内聚，低耦合