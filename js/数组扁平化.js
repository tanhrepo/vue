const arr = [1, [2, [3, [4, 5]]], 6];
//方法一：flat()
const res1 = arr.flat(Infinity);
console.log('1',res1)
// ==>> [1, 2, 3, 4, 5, 6]

//方法二:利用正则
const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');
console.log('2',res2)
// ==>> ["1", "2", "3", "4", "5", "6"],数据类型都会变成字符串

//方法二:正则改良
const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
console.log('3',res3)
// ==>> [1, 2, 3, 4, 5, 6]

//方法四:使用reduce
const flatten = arr => {
	return arr.reduce((pre, cur) => {
		return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
	}, [])
}
const res4 = flatten(arr);
console.log('4',res4)

//方法五:函数递归
const res5 = [];
const fn = arr => {
	for (let i = 0, j = arr.length; i < j; i++) {
		if (Array.isArray(arr[i])) {
			fn(arr[i])
		} else {
			res5.push(arr[i])
		}
	}
	return res5
}
fn(arr)
console.log('5',res5)