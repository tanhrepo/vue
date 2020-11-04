const arr = [1,[2,[3,[4,5]]],6];
//方法一：flat()
const res1 = arr.flat(Infinity);
console.log(res1)
// ==>> [1, 2, 3, 4, 5, 6]

//方法二:利用正则
const res2 = JSON.stringify(arr).replace(/\[|\]/g,'').split(',');
console.log(res2)
// ==>> ["1", "2", "3", "4", "5", "6"],数据类型都会变成字符串

//方法二:正则改良
const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g,'')+']');
console.log(res3)
// ==>> [1, 2, 3, 4, 5, 6]