/**
 * Find Multiples of a Number
 * https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
 */

function findMultiples(integer, limit) {
    let result = []
    for (let i = 1; i <= limit; i++) {
        if (integer * i <= limit) {
            result.push(integer * i)
        }

    }
    return result;
}
console.log(findMultiples(5, 25)) //1,2 ; 5,7 ; 4, 27; 11,54

//cara 2
function findMultiples(int, limit) {
    let result = []

    for (let i = int; i <= limit; i += int)
        result.push(i)

    return result
}
//cara 3

function findMultiples(integer, limit) {
    let arr = []
    const loop = limit % integer == 0 ? limit / integer : limit / integer - 1
    if (limit) {
        for (let i = 0; i < loop; i++) {
            arr.push(integer * (i + 1))
        }
        return arr;
    }
}
console.log(findMultiples(5, 25))