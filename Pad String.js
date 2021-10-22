function padString(num, length) {
    num = num.toString()
    while (num.length < length) {
        num = "0" + num;
    }
    return num;
}
console.log(padString(5, 4))
console.log(padString(877, 1))