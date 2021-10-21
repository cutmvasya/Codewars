/**
 * Merge two sorted arrays into one
 * https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
 */

function mergeArrays(arr1, arr2) {
    let num = arr1.concat(arr2)
    let sorted = num.sort((a, b) => a - b)
    let uniqueChars = [...new Set(sorted)];
    return uniqueChars
}

/**
 * Remove duplicate words
 * https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript
 */

function removeDuplicateWords(s) {
    var arrWord = s.split(" ");
    let uniqueChars = [...new Set(arrWord)];
    return uniqueChars.join(' ').toString();
}

/**
 * Sort and Star
 * https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
 */

function twoSort(s) {
    let sortV = s.sort()
    return sortV[0].split('').join('***')
}

/**
 * Find the smallest integer in the array
 * https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
 */

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let min;

        for (let i = 0; i < args.length; i++) {
            if (args[i] <= args[0]) {
                args[0] = args[i];
                min = args[i];
            }
        }
        return min;
    }
}

//cara 2
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

/**
 * altERnaTIng cAsE <=> ALTerNAtiNG CaSe
 * https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
 */

String.prototype.toAlternatingCase = function() {
    return this.toString().split('')
        .map(e => e.match(/[a-z]/) ? e.toUpperCase() : e.toLowerCase())
        .join('');
}

/**
 * Find Multiples of a Number
 * https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
 */

function findMultiples(integer, limit) {
    let multiples = [];
    for (let i = integer; i <= limit; i += integer) {
        multiples.push(i);
    }
    return multiples;
}

/**
 * Previous multiple of three
 * https://www.codewars.com/kata/61123a6f2446320021db987d/solutions/javascript
 */

const prevMultOfThree = n => {

    for (let i = String(n).length; i > 0; i--) {
        n = Number(String(n).substring(0, i));
        if (n % 3 === 0) { return n; }
    }

    return null;
}

/**
 * Count of positives / sum of negatives
 * https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
 */

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }

    let positif = input.filter((val) => val >= 1);
    let negatif = input.filter((val) => val < 1).reduce((a, b) => a + b)

    return [positif.length, negatif]
}

/**
 * Sum of positive
 * https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript
 */

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

function positiveSum(arr) {
    return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
}

/**
 * Sort with Arrow Functions
 * https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript
 */