let fs = require('fs');
let text = fs.readFileSync('./Day 4/day4.txt').toString('utf-8');

let passportInput = text.split('\r\n\r\n');

let count = 0;

passportInput.forEach(function(element){
    let passportProperties = element.replace(/(?:[\r\n])+/g, ' ').split(' ');

    let valid = false;

    if(passportProperties.filter(o => o.startsWith('cid')).length > 0) {
        if(passportProperties.length === 8) {
            valid = true;
        }
    } else if (passportProperties.length === 7) {
        valid = true;
    }

    // PART TWO

    if(valid) {
        let byr = passportProperties.filter(o => o.startsWith('byr'));
        let iyr = passportProperties.filter(o => o.startsWith('iyr'));
        let eyr = passportProperties.filter(o => o.startsWith('eyr'));
        let hgt = passportProperties.filter(o => o.startsWith('hgt'));
        let hcl = passportProperties.filter(o => o.startsWith('hcl'));
        let ecl = passportProperties.filter(o => o.startsWith('ecl'));
        let pid = passportProperties.filter(o => o.startsWith('pid'));

        byr = byr[0].substring(4, byr[0].length);
        iyr = iyr[0].substring(4, iyr[0].length);  
        eyr = eyr[0].substring(4, eyr[0].length);
        hgt = hgt[0].substring(4, hgt[0].length);
        hcl = hcl[0].substring(4, hcl[0].length);
        ecl = ecl[0].substring(4, ecl[0].length);
        pid = pid[0].substring(4, pid[0].length);
        
        if(/^(19[2-9]\d|200[0-2])$/.test(byr)) {
            if(/^(201\d|2020)$/.test(iyr)) {
                if(/^(202\d|2030)$/.test(eyr)) {
                    if(/^#[a-f0-9]{6}$/.test(hcl)) {
                        if(/amb|blu|brn|gry|grn|hzl|oth/.test(ecl)) {
                            if(/^[0-9]{9}$/.test(pid)) {
                                if(hgt.indexOf('cm') > 0) {
                                    hgt = hgt.replace('cm', '');
                                
                                    if(parseInt(hgt) >= 150 && parseInt(hgt) <= 193) {
                                        count++;
                                    }
                                } else if (hgt.indexOf('in') > 0){
                                    hgt = hgt.replace('in', '');

                                    if(parseInt(hgt) >= 59 && parseInt(hgt) <= 76) {
                                        count++;
                                    }
                                }
                            }                   
                        }                
                    }                 
                }
            }
        }
    }
});

console.log(`There are ${count} valid passports`);