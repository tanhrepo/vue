window.onload=function(){
	let canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 800;
	
	let context = canvas.getContext('2d');
		context.moveTo(100,100);
		context.lineTo(700,700);
		context.lineWidth = 3;
		context.stroke()
}