/**
 * Exclamation marks series #8: Move all exclamation marks to the end of the sentence
 * https://www.codewars.com/kata/57fafd0ed80daac48800019f/solutions/javascript
 */
function remove(s) {
    //coding and coding....
    let exclamation = ''
    let str = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '!') {
            exclamation += s[i]
        } else {
            str += s[i]
        }
    }
    let result = str + exclamation;
    return result

}