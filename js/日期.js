let input
while (input = readline()) {
	let arr = input.split(' ');
	let year = arr[0];
	let month = arr[1];
	let day = arr[2];
	// 闰年
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		let sum = 0;
		if (month === 1) {
			console.log(day)
		} else {
			for (let i = 1; i < month; ++i) {
				if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12) {
					sum += 31
				} else if (i === 2) {
					sum += 29
				} else {
					sum += 30
				}
			}
			sum += day;
			console.log(sum);
		}
	} else {
		let sum = 0;
		if (month === 1) {
			console.log(day)
		} else {
			for (let i = 1; i < month; ++i) {
				if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12) {
					sum += 31
				} else if (i === 2) {
					sum += 28
				} else {
					sum += 30
				}
			}
			sum += day;
			console.log(sum);
		}
	}
}
