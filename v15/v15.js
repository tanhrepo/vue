let [head,...index] = [1,2,3,4,5]
console.log(head)//1
console.log(index)//(4) [2, 3, 4, 5]

let [head2,index2] = [1,2,3,4,5]
console.log(head2)//1
console.log(index2)//2

//如果解构不成功，变量的值就等于undefined。
let [x, y, ...z] = ['a'];
console.log(x); // "a"
console.log(y);// undefined
console.log(z);// []

let [a, [b], d] = [1, [2, 3], 4];
console.log(a) // 1
console.log(b) // 2
console.log(d) // 4

let [foo = true] = [];
console.log(foo) // true

let [x1, y1 = 'b'] = ['a']; // x1='a', y1='b'
let [x2, y2 = 'b'] = ['a', undefined]; // x2='a', y2='b'

let [x3 = 1, y3 = x3] = [];     // x=1; y=1
let [x4 = 1, y4 = x4] = [2];    // x=2; y=2
let [x5 = 1, y5 = x5] = [1, 2]; // x=1; y=2
// let [x6 = y6, y6 = 1] = [];     // ReferenceError: y is not defined


//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
let { bar, foo1 } = { foo1: 'aaa', bar: 'bbb' };
console.log(foo1) // "aaa"
console.log(bar) // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz) // undefined

