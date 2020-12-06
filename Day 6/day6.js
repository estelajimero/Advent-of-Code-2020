let fs = require('fs');
let text = fs.readFileSync('./Day 6/input6.txt').toString('utf-8');

let groups = text.split('\r\n\r\n');

let count = 0;
let yesCount = 0;

for(i = 0; i < groups.length; i++) {
    let persons = groups[i].split('\r\n');

    let answers = new Set();

    let allChars = [];

    for(let person of persons) {
        for(let char of person) {
            answers.add(char);
            
            allChars.push(char);
        }
    }

    let groupCount = 0;

    for(j = 0; j < allChars.length; j++ ) {
        let letter = allChars[j];

        let letterCount = 1;

        for(z = 0; z < allChars.length; z++) {
            if(z != j) {
                if(allChars[z] === letter) {
                    letterCount++;
                }
            }
        }

        if(letterCount === persons.length) {
            groupCount++;
        }
    }

    count += answers.size;
    yesCount += groupCount / persons.length;;
}

console.log(`There are ${count} yes in all forms`);
console.log(`There are ${yesCount} common yes in all forms`);