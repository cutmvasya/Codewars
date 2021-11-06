/**
 * Vasya Clerk
 */

function tickets(peopleInLine) {
    // ...
    let money = 0
    for (let i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] <= 25) {
            money += 25
        } else {
            let temp = peopleInLine[i]
            temp -= 25
            money -= temp
            if (money < 0) return 'NO'
        }
    }
    return 'YES'
}

console.log(tickets([25, 100]))