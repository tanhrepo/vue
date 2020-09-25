window.onload = function() {
canvas(id) {
		id.width = 800;
		id.height = 800;
		console.log(id);
		let context = id.getContext('2d');
		context.lineWidth = 9;
		// beginPath和closePath
		context.beginPath();
		context.moveTo(100, 100);
		context.lineTo(700, 700);
		context.lineTo(100, 700);
		// context.lineTo(100,100);//最后一个lineTo可以省掉
		context.closePath();
		let gradient = context.createLinearGradient(0, 0, 0, 700);
		gradient.addColorStop(0, "#96EAFB");
		gradient.addColorStop(1, "rgba(255, 255, 255, 0.47)");

		// 填充
		context.fillStyle = gradient;
		context.fill();
		//先填充，再描边，不然边会被覆盖一部分
		context.strokeStyle = "#058";

		// context.stroke();
	},

	let canvas1 = document.getElementById("canvas1");
	let canvas2 = document.getElementById("canvas2");
	let canvas3 = document.getElementById("canvas3");
	canvas(canvas3);
	console.log(canvas2);
	canvas1.width = 800;
	canvas1.height = 800;

	canvas2.width = 800;
	canvas2.height = 800;

	let context = canvas1.getContext('2d');
	let context2 = canvas2.getContext('2d');
	context.lineWidth = 9;

	context.beginPath(); //第一个可以省略掉
	// beginPath和lineTo在一起时和moveTo的功能相当，可以直接用lineTo
	context.lineTo(100, 100);
	context.lineTo(700, 700);
	context.strokeStyle = "red";
	context.stroke();

	context.beginPath();
	context.lineTo(700, 700);
	context.lineTo(100, 700);
	context.strokeStyle = "lightblue"
	context.stroke();

	context.beginPath();
	context.moveTo(100, 700);
	context.lineTo(100, 100);
	context.strokeStyle = "#058"
	context.stroke();

	// 封闭图形
	context2.lineWidth = 9;
	// beginPath和closePath
	context2.beginPath();
	context2.moveTo(100, 100);
	context2.lineTo(700, 700);
	context2.lineTo(100, 700);
	// context2.lineTo(100,100);//最后一个lineTo可以省掉
	context2.closePath();
	let gradient = context2.createLinearGradient(0, 0, 0, 700);
	gradient.addColorStop(0, "#96EAFB");
	gradient.addColorStop(1, "rgba(255, 255, 255, 0.47)");

	// 填充
	context2.fillStyle = gradient;
	context2.fill();
	//先填充，再描边，不然边会被覆盖一部分
	context2.strokeStyle = "#058";

	// context2.stroke();

}
