let fs = require('fs');
let text = fs.readFileSync('./Day 5/input5.txt').toString('utf-8');

let boardingInput = text.split('\r\n');

let highestSeat = 0;
let allSeats = [];

for(i = 0; i < boardingInput.length; i++) {
    let rowChar = boardingInput[i].substring(0, 7);

    let minValue = 0;
    let maxValue = 127;

    for(j = 0; j < rowChar.length; j++) {
        let rowLetter = rowChar[j];

        if(rowLetter === "F") {
            maxValue -= Math.round((maxValue - minValue) / 2);
        } else if(rowLetter === "B") {
            minValue += Math.round((maxValue - minValue) / 2);
        }
    }

    let row = minValue;

    let columnChar = boardingInput[i].substring(7, 10);

    minValue = 0;
    maxValue = 7;

    for(j = 0; j < rowChar.length; j++) {
        let columnLetter = columnChar[j];

        if(columnLetter === "L") {
            maxValue -= Math.round((maxValue - minValue) / 2);
        } else if(columnLetter === "R") {
            minValue += Math.round((maxValue - minValue) / 2);
        }
    }

    let column = minValue;

    let seatId = row * 8 + column;

    allSeats.push(seatId);

    if(seatId > highestSeat){
        highestSeat = seatId;
    } 
}

// Part two
for(i = 0; i <= 888; i++) {
    let found = allSeats.includes(i);

    if (!found) {
        if(allSeats.includes(i - 1) && allSeats.includes(i + 1)) {
            console.log(`Your seat ID is ${i}.`);
        }
    }
}


// console.log(`The highest seat ID is ${highestSeat}.`);