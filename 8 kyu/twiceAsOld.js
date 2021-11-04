/**
 * Twice as old
 * https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
 */

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    let son = 2 * sonYearsOld
    let pastDad = dadYearsOld - son
    if (pastDad < 0) {
        return pastDad * -1
    }
    return pastDad
}
console.log(twiceAsOld(36, 7))