const fs = require('fs');

function question1() {
	fs.readFile('./input.txt', (err, data) => {
		const year = data.toString();
		const yearArray = year.split('\r\n'); 
		let ans=0;
		 for (let i = 0; i < yearArray.length; i++) {
				for (let j = i + 1; j < yearArray.length; j++) {
					for (let k = j + 1; k < yearArray.length; k++) {
						a=parseInt(yearArray[i]);
					    b=parseInt(yearArray[j]);
						c=parseInt(yearArray[k]);
						if ((a+b+c) == 2020) {							
							ans = a*b*c;							
							break;
						}
					}
				}
			}
			console.log('result:', ans);
	})
}

question1()