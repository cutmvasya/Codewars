/**
 * https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript
 * 8 kyu
 * Tambah tanda ? pada string yang dimasukkan, apabila pada string tsb sudah ada tanda tanya, 
 * tidak perlu ditambahkan lagi. 
 */


//  function ensureQuestion(s) {
//    return s[s.length-1] === '?' ? s : `${s}?`
//return s.split('?').join('').concat('?') --> cara lain
//return s.includes('?') ? s : `${s}?`; --> cara lain
//  }

/**
 * Number to power
 * 8 kyu
 * https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript
 * 1. create a function numberToPower with the parameter number and power
 * 2. raise the number up to the power (ex : 2, 3 --> 2x2x2)
 * 3. Don't use math.power, eval(), and **
 */

//  function numberToPOwer (number, power) {

//  }

function reverseWord(str) {
    return str.split(' ').reverse().join(' ');

}
console.log(reverseWord("Hello World!"));

// function feast (beast, dish){
//    let firstWord = beast[0];
//    if ((beast.length[0] + beast.length[1]) === (dish.length[0] + dish.length[1])){
//       console.log("Makan")
//    }else{
//       console.log("Kerja")
//    }
//    console.log(beast.length[0]);
// }
// feast("Chirpie", "choco");


/**
 * Loop Array
 * https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50
 * How to solve
 * 1. create new array name result
 */

function loopArr(arr, direction, step) {
    if (direction == 'right') {
        let move = arr.slice(-step);
        let result = arr.slice(0, arr.length - step)
        console.log(move, result);
    } else if (direction == 'left') {
        move = arr.slice(0, step)
        result = arr.slice(step)
        console.log(move, result)
    }

}
loopArr([1, 5, 87, 45, 8, 8], 'left', 2)
loopArr([1, 5, 87, 45, 8, 8], 'right', 2);