const arr = [1,1,'1',17,true,true,false,false,'true','a',{},{}];

//====> [1,'1',17,true,false,'true','a',{},{}] (为啥有两个对象object{}???)

//方法一:利用set
const res1 = Array.from(new Set(arr));
console.log("res1:",res1);
//方法二:两层for循环+splice

const unique1 = arr => {
	let len = arr.length;
	for(let i = 0;i<len;i++){
		for(let j = i + 1;j < len;j++){
			if (arr[i] === arr[j] ){
				arr.splice(j,1);
				len--;
				j--;
			}
		}
	}
	return arr;
}

let res2 = unique1(arr)
console.log("res2:",res2);

// 方法三利用indexOf
const unique2 = arr =>{
	const res = [];
	for (let i = 0,j = arr.length;i < j;i++){
		if(res.indexOf(arr[i]) === -1) res.push(arr[i]);
	}
	return res;
}

let res3 = unique2(arr)
console.log("res3:",res3)

// 方法四:利用include
const unique3 = arr =>{
	const res = [];
	for(let i=0,j = arr.length;i<j;i++){
		if(!res.includes(arr[i])) res.push(arr[i]);
	}
	return res;
}

let res4 = unique3(arr)
console.log("res4:",res4)

// 方法五：利用filter
const unique4 = arr =>{
	return arr.filter((item,index) =>{
		return arr.indexOf(item) === index;
	});
}
let res5 = unique4(arr)
console.log("res5:",res5)

// 方法六：利用Map
const unique5 = arr =>{
	const map = new Map();
	const res = [];
	for(let i = 0,j = arr.length;i < j; i++){
		if(!map.has(arr[i])){
			map.set(arr[i],true)
			res.push(arr[i]);
		}
	}
	return res;
}
let res6 = unique5(arr)
console.log("res6:",res6)