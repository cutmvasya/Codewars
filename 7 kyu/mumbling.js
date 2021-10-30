/**
 * https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
 */
function accum(s) {
    let result = [];
    let slower = s.toLowerCase()

    for (let i = 0; i < slower.length; i++) { //i < 4
        let str = slower[i].toUpperCase()
        for (let j = 0; j < i; j++) {
            str += slower[i]
        }
        result.push(str)
    }
    return result.join('-')
}
console.log(accum('aBcD'))