let str = 'AAAAa';
// let input =readline().split("");
// var arr = [];
// while(str = readline()){
// 	str = str.split('');
// 	arr.push(str);
// }
// console.log(str[0]);
// let str = read_line();
function Word(str){
	let A = [];
	let a = [];
	let m = 0,n=0;
	for(let i in str){
		let code = str[i].charCodeAt()
		if(code > 96 && code <123){
			a.push(str[i]);
			// console.log(a[i])
		}else if(code > 64 && code<91){
			A.push(str[i]);
		}
	}
	m = a.length;
	n = A.length;
	let result = Math.abs(m-n);
	console.log(result);
}


Word(str)


