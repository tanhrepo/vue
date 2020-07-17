const app1 = new Vue({
    el:'#app1',
    data:{
        books:[
            {
                id:1,
                name:'算法',
                data: '2016.01',
                price:85,
                count:1,
            },
            {
                id:2,
                name:'数据结构',
                data: '2017.03',
                price:45,
                count:1,
            },
            {
                id:3,
                name:'天下',
                data: '2017.08',
                price:92,
                count:1,
            },
            {
                id:4,
                name:'烽烟起',
                data: '2016.01',
                price:95,
                count:1,
            },
            {
                id:5,
                name:'花火',
                data: '2019.01',
                price:66,
                count:1,
            },
        ],
    },
    filters:{
        showPrice(price){
            return '¥' + price.toFixed(2)
        }
    },
    methods:{
        increment(index){
            console.log('increment',index);
            this.books[index].count++;

        },
        decrement(index){
            console.log('decrement',index);
            this.books[index].count--;
        },
        removeHandle(index){
            console.log('移除',index);
            this.books.splice(index,1);
        }
    },
    computed:{
        totalPrice(){
            let totalPrice = 0
            for (let i = 0;i<this.books.length;i++){
                totalPrice += this.books[i].price * this.books[i].count
            }
            return totalPrice
        }
    }
})


// 编程范式:命令式编程/声明式编程
// 编程范式:面向对象编程(第一公民：对象)/面向函数编程(第一公民:函数)
// filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个boolean值
// true：当返回true的时候，函数内部会自动将这次回调的n加入到新的数组里面
// false：当返回的是false时，函数内部会过滤掉这次的n

const nums = [10,33,23,55,222,11,235,232]

let total = nums.filter(n => n<100).map(n => n * 2).reduce((pre,n) => pre+n );
console.log(total);


// let total = nums.filter(function (n) {
//     return n < 100
// }).map(function (n) {
//     return n * 2
// }).reduce(function (preValue,n) {
//     return preValue + n
// },0)
// console.log(total);

// // 1.filter函数的使用
// let newNums = nums.filter(function (n) {
//     return n < 100
// })
// console.log(newNums);
//
// // 2.map函数的使用
// let newNums2 = newNums.map(function (n) {
//     return n * 2
// })
// console.log(newNums2);
//
// // 3.reduce函数的使用
// let total = newNums2.reduce(function (preValue,n) {
//     return preValue + n
// },0)
// console.log(total);


// 1.需求:取出所有小于100的数
// let newNums = []
// for(let i of nums){
//     if (i < 100){
//         newNums.push(i)
//     }
// }
//
// // 2.需求：将取出的数都变大2倍
// let newNums2 = []
// for(let i of newNums){
//     newNums2.push(i * 2)
// }
//
// // 3.需求：将所有newNums2的数字相加，得到最终的结果
// let total = 0
// for (let n of newNums2){
//     total += n
// }
// console.log(total);