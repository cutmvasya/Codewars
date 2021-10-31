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