window.onload = function(){
	//获取事件
	let add = document.getElementById("add");
	let sub = document.getElementById("sub");
	let mul = document.getElementById("mul");
	let divide = document.getElementById("divide");
	//绑定事件
	add.onclick = function(){
		let num1 = window.parseFloat(document.getElementById("num1").value);
		let num2 = window.parseFloat(document.getElementById("num2").value);
		result.value = num1 + num2;
	}
	sub.onclick = function(){
		let num1 = document.getElementById("num1").value;
		let num2 = document.getElementById("num2").value;
		result.value = num1 - num2
	}
	mul.onclick = function(){
		let num1 = document.getElementById("num1").value;
		let num2 = document.getElementById("num2").value;
		result.value = num1 * num2
	}
	divide.onclick = function(){
		let num1 = document.getElementById("num1").value;
		let num2 = document.getElementById("num2").value;
		result.value = num1 / num2
	}
}	
