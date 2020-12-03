// DAY 1 ADVENT CODE
let fs = require('fs');
let text = fs.readFileSync('./Day 1/day 1.txt').toString('utf-8');

let expenseReport = text.split('\r\n');

for (i = 0; i < expenseReport.length; i++) {
    let value = parseInt(expenseReport[i]);

    for(j = 0; j < expenseReport.length; j++) {
        let secondValue = parseInt(expenseReport[j]);

        for(z = 0; z < expenseReport.length; z++) {
            let thirdValue = parseInt(expenseReport[z]);

            if(value != secondValue && value != thirdValue) {
                if(value + secondValue + thirdValue === 2020) {
                    console.log(`Three entries that sum 2020 are ${value}, ${secondValue} & ${thirdValue}, multiplying them you get ${value * secondValue * thirdValue}`);
                    
                    return;
                }
            }
        }
    }
}

