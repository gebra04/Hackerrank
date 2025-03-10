'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let parts = s.split(':')
    let conversion
    let hours = parseInt(parts[0].slice(0, 2))
    let min = parts[1].slice(0, 2)
    let sec = parts[2].slice(0, 2)
    let timeCicle = s.slice(-2) 

    if (timeCicle == "AM") {
        if (hours != 12) {
            hours = String(hours).padStart(2, '0')
            conversion = `${hours}:${min}:${sec}`
        }
        else {
            hours = 0
            hours = String(hours).padStart(2, '0')
            conversion = `${hours}:${min}:${sec}`
        }
    }
    else {
        if (hours != 12) {
            hours += 12
            hours = String(hours).padStart(2, '0')
            conversion = `${hours}:${min}:${sec}`
        }
        else {
            hours = String(hours).padStart(2, '0')
            conversion = `${hours}:${min}:${sec}`
        }
    }
    return conversion
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
