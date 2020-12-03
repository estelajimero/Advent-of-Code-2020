let fs = require('fs');
let text = fs.readFileSync('./Day 3/day3.txt').toString('utf-8');

let treesInput = text.split('\r\n');

for (i = 0; i < treesInput.length; i++) {
    treesInput[i] = treesInput[i].repeat(300);
}

//RIGHT 1, DOWN 1
let index = 0;
let resultOne = 0;

for (j = 0; j < treesInput.length; j++) {
    let positionValue = treesInput[j].substring(index, index + 1);

    if(positionValue === "#") {
        resultOne++;
    }

    index += 1;
}

console.log(`There are ${resultOne} on part 1.`);

//RIGHT 3, DOWN 1
index = 0;
let resultTwo = 0;

for (j = 0; j < treesInput.length; j++) {
    let positionValue = treesInput[j].substring(index, index + 1);

    if(positionValue === "#") {
        resultTwo++;
    }

    index += 3;
}

console.log(`There are ${resultTwo} on part 2.`);

//RIGHT 5, DOWN 1
index = 0;
let resultThree = 0;

for (j = 0; j < treesInput.length; j++) {
    let positionValue = treesInput[j].substring(index, index + 1);

    if(positionValue === "#") {
        resultThree++;
    }

    index += 5;
}

console.log(`There are ${resultThree} on part 3.`);

//RIGHT 7, DOWN 1
index = 0;
let resultFour = 0;

for (j = 0; j < treesInput.length; j++) {
    let positionValue = treesInput[j].substring(index, index + 1);

    if(positionValue === "#") {
        resultFour++;
    }

    index += 7;
}

console.log(`There are ${resultFour} on part 4.`);

//RIGHT 1, DOWN 2
index = 0;
let resultFive = 0;

for (j = 0; j < treesInput.length; j +=2) {
    let positionValue = treesInput[j].substring(index, index + 1);

    if(positionValue === "#") {
        resultFive++;
    }

    index += 1;
}

console.log(`There are ${resultFive} on part 5.`);

console.log(resultOne * resultTwo * resultThree * resultFour * resultFive);

