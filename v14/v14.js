window.onload = function(){
	let province = document.getElementById("province");
	let city = document.getElementById("city");
	province.onchange = function(){
		// alert(this.value);
		city.innerHTML='';
		switch (this.value){
			case "guangdong":
				//填充广东的城市信息
				let op1 = document.createElement("option");
				op1.value = "guangzhou";
				op1.innerHTML = "广州";
				
				let op2 = document.createElement("option");
				op2.value = "shenzhen";
				op2.innerHTML = "深圳";
				
				city.appendChild(op1);
				city.appendChild(op2);
				break;
			case "guangxi":
				//填充广西的城市信息
				let op3 = document.createElement("option");
				op3.value = "guilin";
				op3.innerHTML = "桂林";
				
				let op4 = document.createElement("option");
				op4.value = "nanning";
				op4.innerHTML = "南宁";
				
				city.appendChild(op3);
				city.appendChild(op4);
				break;
			default:
				break;
		}
	}
}