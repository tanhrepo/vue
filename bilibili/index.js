let banner = document.querySelector('.banner');
console.log(banner);
console.log(document.getElementById("aaa"));
let images = document.querySelectorAll('.image');
console.log(images[0])

let data_image = [
	{x:0,b:4},
	{x:0,b:0},
	{x:0,b:1},
	{x:0,b:4},
	{x:0,b:5},
	{x:0,b:6},
]

let init = () =>{
	for (let key in images) {
		if(images.hasOwnProperty(key)){
			const element = images[key];
			const element_data = data_image[key];
			element.children[0].style =
			 'transform:translate('+ element_data.x +'px);filter:blur('+ element_data.b +'px)';
		}
	}
}

window.onload = ()=>{
	init();
}