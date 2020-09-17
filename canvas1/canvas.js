window.onload=function(){
	let canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 800;
	
	let context = canvas.getContext('2d');
	context.lineWidth = 3;
	
	context.beginPath();
	context.moveTo(100,100);
	context.lineTo(700,700);
	context.strokeStyle = "red"
	context.stroke()
	context.beginPath();
	context.moveTo(700,700);
	context.lineTo(100,700);
	context.strokeStyle = "lightblue"
	context.stroke()
	context.beginPath();
	context.moveTo(100,700);
	context.lineTo(100,100);
	context.strokeStyle = "#058"
	context.stroke()
}