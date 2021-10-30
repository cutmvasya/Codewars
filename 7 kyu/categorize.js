/**
 * Categorize New Member
 * https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/solutions/javascript
 */

function openOrSenior(data) {
    let datas = []
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            datas.push('Senior')
        } else {
            datas.push('Open')
        }
    }
    return datas
}
console.log(openOrSenior([
    [55, 8],
    [2, 3],
    [3, 4]
]))