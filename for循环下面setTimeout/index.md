 ## for下setTimeout运行机制
~~~
   for(var i=0;i<10;i++){
      setTimeout(console.log(i),0);
  }
~~~

这个时候输出的值并不是10个10  
而是1~10  

容易和下面的这行代码混淆  
~~~
 for(var i=0;i<10;i++){
     setTimeout(function(){
         console.log(i);  //连续的10个10
     },0);
 }

~~~
这个时候输出的值是10个10；  
首先我们来说一下为什么是连续的10个10。  
因为在for循环中使用setTimeout涉及到了异步机制。说到异步机制那就要说一下JS的运行机制。  

### js的运行机制
JS是单线程环境，也就是说代码的执行是从上到下，依次执行。也就是同一个时间只能做一件事。

单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。  
如果前一个任务耗时很长，后一个任务就不得不一直等着。  
JavaScript将所有任务分成两种，**一种是同步任务，另一种是异步任务**。   

同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；  
异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

在所有同步任务执行完之前，任何的异步任务是不会执行的。 而setTimeout就是一个异步任务，  
所以会先执行for循环这个同步任务，把setTimeout()放进任务队列中等待主线程的for循环执行完毕，一旦"执行栈"中的所有同步任务执行完毕（循环结束后此时i=10）就会从队列中取出setTimeout()  

for循环一次碰到一个 setTimeout()，并不是马上把setTimeout()拿到异步队列中，而要等到一秒后，才将其放到任务队列里面。

### 异步执行的运行机制
1. 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
2. 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
3. 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
4. 主线程不断重复上面的第三步。
5. 主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。只要主线程空了，就会去读取"任务队列"，这就是JavaScript的运行机制。这个过程会循环反复。

### 一般来说，有以下四种会放入异步任务队列：
> setTimeout和setlnterval  
> DOM事件  
> ES6中的Promise  
> Ajax异步请求  

___
回归正题，既然在for循环中运行setTimeout()涉及到了异步，那上面的解释不就解决问题了吗，可是为什么第一段代码结果不是连续的10个10呢？这就涉及到了console.log 与console.log()的区别了。
看下面代码：

~~~js
> eval(console.log)
> ƒ log() { [native code] }
> eval(console.log())
> undefined
~~~
(浏览器控制台输出)

其实console.log 与console.log()的区别就是  
console.log()是立即执行的也就是IIFE，而console.log只是一个function 函数名。所以console.log()是同步任务跟for循环是同步执行的，而setTimeout()是异步任务需要等到主线程的同步任务执行完毕后才能执行，所以结果就是0、1、2、3、4、5、6、7、8、9了。

~~~js
>   for(var i=0;i<10;i++){
      setTimeout(console.log(i),0);
  }
  
  _______
  0
  1
  2
  3
  4
  5
  6
  7
  8
  9
~~~
再看一段代码
~~~js
 for(var i=0;i<10;i++){
     setTimeout("console.log(i)",0);
	 //这时就是连续的10个10，
	 //consloe.log加上了引号
 }

~~~

原因在于加了双引号的console.log()不再是立即执行函数。setTimeout() 会判断第一个参数是否是[function]，如果不是，则会尝试将它当做字符串处理。也就是说，console.log(i)执行后的返回值转为字符串。

~~~js
> eval("console.log()")
< undefined
~~~


for循环中运行setTimeout()的三种情况区别
~~~js
 for(var i=0;i<10;i++){
     setTimeout(console.log(i),0);
	 //0、1、2、3、4、5、6、7、8、9
 }

 for(var i=0;i<10;i++){
     setTimeout(function(){
         console.log(i);
		 //连续的10个10
     },0);
 }

 for(var i=0;i<10;i++){
     setTimeout("console.log(i)",1000);
	 //连续的10个10
 }

~~~