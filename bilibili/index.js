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
	// images[0].children[0].style = 'transform:translate(0px);filter:blur(4px)'
	// images[1].children[0].style = 'transform:translate(0px);filter:blur(0px)'
	// images[2].children[0].style = 'transform:translate(0px);filter:blur(1px)'
	// images[3].children[0].style = 'transform:translate(0px);filter:blur(4px)'
	// images[4].children[0].style = 'transform:translate(0px);filter:blur(5px)'
	// images[5].children[0].style = 'transform:translate(0px);filter:blur(6px)'
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