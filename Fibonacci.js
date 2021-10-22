function fibonacci(int) {
    let fib = [];
    fib[0] = 1;
    fib[1] = 1;
    for (let i = 2; i <= int; i++) {
        let push = fib[i - 1] + fib[i - 2];
        if (push > int) return fib
        fib.push(push)
    }
    return fib
}

console.log(fibonacci(12))

//To get fibonacci index 10
function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(10))