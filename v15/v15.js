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