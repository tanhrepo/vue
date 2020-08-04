window.onload = function(){
	//获取事件
	let add = document.getElementById("add");
	let sub = document.getElementById("sub");
	let mul = document.getElementById("mul");
	let divide = document.getElementById("divide");
	//绑定事件
	add.onclick = function(){
		calculate("add");
	}
	sub.onclick = function(){
		calculate("sub");
	}
	mul.onclick = function(){
		calculate("mul");
	}
	divide.onclick = function(){
		calculate("divide");
	}
	function calculate(type){
		let result = document.getElementById("result");
		let num1 = window.parseFloat(document.getElementById("num1").value);
		let num2 = window.parseFloat(document.getElementById("num2").value);
		switch(type){
			case "add":
				result.value = num1 + num2;
				break;
			case "sub":
				result.value = num1 - num2;
				break;
			case "mul":
				result.value = num1 * num2;
				break;
			case "divide":
				result.value = num1 / num2;
				break;
			default:
				break;
		}
	}
}	
