'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let zeros = 0
    let pos = 0
    let neg = 0
    let arrSize = arr.length
    for (let i = 0; i < arrSize; i++) {
        if (arr[i] == 0) {
            zeros++
        }
        else {
            if (arr[i] > 0) {
                pos++
            }
            else {
                neg++
            }
        }
    }
    console.log((pos/arrSize).toFixed(6))
    console.log((neg/arrSize).toFixed(6))
    console.log((zeros/arrSize).toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
