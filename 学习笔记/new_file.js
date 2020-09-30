function Foo() {
    var i = 0;
    return function() {
        console.log(i++);
    }
}
 
var f1 = Foo(),
    f2 = Foo();
console.dir(f1.__proto__() == Foo.__proto__())
console.dir(f1 == f2)
f1();
// f1();
// f1();
// 0 9 8 8 01
// let a = 0
// let b = 0
// console.log(a=a++)
// a = a++
// console.log(a)
// b = a++
// console.log(a)
// console.log(b)