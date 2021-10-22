function star(n) {
    let string = "";
    for (let i = 1; i < n + 1; i++) {
        for (let j = 0; j < i * 2 - 1; j++) {
            string += "*";
        }
        string += "\n";
    }
    return string;
}
console.log(star(3))