let fs = require('fs');
let text = fs.readFileSync('./Day 2/day2.txt').toString('utf-8');

let passwordInput = text.split('\r\n');

function passwords (maxnumber, minnumber, letter, pass) {
    this.maxnumber = maxnumber
    this.minnumber = minnumber
    this.letter = letter
    this.pass = pass
}

let passwordList = [];

passwordInput.forEach(function(element, index, array) {
    let passwordMin = element.substring(0, element.indexOf('-'));
    let passwordMax = element.substring(element.indexOf('-') + 1, element.indexOf(' '));
    let letter = element.substring(element.indexOf(' ') + 1, element.indexOf(':'));
    let pass = element.substring(element.indexOf(': ') + 2, element.length);

    let passwordObject = new passwords(passwordMax, passwordMin, letter, pass);

    passwordList.push(passwordObject);
});

// PART ONE 
let count = 0;

passwordList.forEach(function(element, index, array) {
    let charCount = element.pass.split(element.letter).length - 1;

    if(charCount >= element.minnumber && charCount <= element.maxnumber) { 
        count++;
    }
})

// //PART TWO
// let count = 0;

// passwordList.forEach(function(element, index, array) {
//     let firstPosition = element.pass[parseInt(element.minnumber) - 1];
//     let secondPosition = element.pass[parseInt(element.maxnumber) - 1];

//     if(element.letter === firstPosition && element.letter != secondPosition) {
//         count++;
//     } else if (element.letter === secondPosition && element.letter != firstPosition) {
//         count++;
//     }
// });

console.log(`There are ${count} valid passwords`);