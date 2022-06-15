// "use strict";

// /*
// **1. Check if a number is within a given range.**
// Create a function `isWithinRange` that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

// Examples:

// - `isWithinRange(4, { min: 0, max: 5 })` ➞ true
// - `isWithinRange(4, { min: 4, max: 5 })` ➞ true
// - `isWithinRange(4, { min: 6, max: 10 })` ➞ false
// - `isWithinRange(5, { min: 5, max: 5 })` ➞ true
//  */

// console.log(`******01******`);
// function isWithinRange(num, obj) {
//   if (num >= obj.min && num <= obj.max) return console.log(true);
//   else return console.log(false);
// }

// isWithinRange(4, { min: 0, max: 5 });
// isWithinRange(4, { min: 4, max: 5 });
// isWithinRange(4, { min: 6, max: 10 });
// isWithinRange(5, { min: 5, max: 5 });

// /*
// **2. Scrabble.**
// Create a function `calcMaxScrabbleScore`, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// ```javascript
// const scrabbleHand = [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// ```
// `console.log(calcMaxScrabbleScore(scrabbleHand));` ➞ 28

//     [
//       { tile: "N", score: 1 },
//       { tile: "K", score: 5 },
//       { tile: "Z", score: 10 },
//       { tile: "X", score: 8 },
//       { tile: "D", score: 2 },
//       { tile: "A", score: 1 },
//       { tile: "E", score: 1 }
//     ]

// Here the player's maximum score would be `1 + 5 + 10 + 8 + 2 + 1 + 1` = 28
//  */

// console.log(`******02******`);

// const scrabbleHand = [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 },
// ];

// function calcMaxScrabbleScore(arr) {
//   let totalScore = 0;

//   for (const score of arr) {
//     totalScore += score["score"];
//   }
//   return totalScore;
// }
// console.log(calcMaxScrabbleScore(scrabbleHand));

// /*
// **3. Is it an empty object?**
// Create a function `isEmptyObject` that returns true if an object is empty, and false if otherwise.

// Examples:

// - `isEmptyObject({})` ➞ true
// - `isEmptyObject({a: 1})` ➞ false
//  */

// console.log(`******03******`);

// function isEmptyObject(obj) {
//   if (Object.keys(obj).length === 0) console.log(true);
//   else console.log(false);
// }

// isEmptyObject({});
// isEmptyObject({ a: 1 });

// /*
// **4. Counting Letters.**
// Create a function that counts the number of occurrences of each letter in a string. Return an object with key value pairs of letters and the number of occurrences for each letter.

// Example:

// - `countLetters("tree")` ➞ {t: 1, r: 1, e: 2} */

// console.log(`******04-method-1******`);

// function countLetters(str) {
//   const myString = str.split("");

//   let myResult = {};

//   for (const el in myString) {
//     if (myResult.hasOwnProperty([myString[el]])) {
//       myResult[myString[el]]++;
//     } else {
//       myResult[myString[el]] = 1;
//     }
//   }
//   return myResult;
// }

// console.log(countLetters("tree"));

// console.log(`******04-method-2******`);

// function countLetter(string) {
//   let myResult = {};
//   const myArray = string.split("");
//   for (let i = 0; i < myArray.length; i++) {
//     if (myResult[myArray[i]] === undefined) {
//       myResult[myArray[i]] = 1;
//     } else {
//       myResult[myArray[i]]++;
//     }
//   }
//   return myResult;
// }

// console.log(countLetter("tree"));

// /*

// **5. Free Shipping.**
// Create a function that determines whether an online order should get free shipping. An order gets free shipping if the total cost of items exceeds €50.

// Examples:

// - `freeShipping({ "Sponge": 3.50, "Soap": 5.99 })` ➞ false
// - `freeShipping({ "Surround Sound Equipment": 499.99 })` ➞ true
// - `freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 })` ➞ false */

// console.log(`******05******`);

// function freeShipping(obj) {
//   let sum = 0;

//   for (const val in obj) {
//     sum += obj[val];
//   }

//   if (sum > 50) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// freeShipping({ Sponge: 3.5, Soap: 5.99 });
// freeShipping({ "Surround Sound Equipment": 499.99 });
// freeShipping({ Wool: 13.99, "Knitting Needles": 15.5, Bag: 13.99 });
/* 
**6. Programming Object.**

```javascript
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes"
};
``` */
console.log(`******06******`);

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "https://www.quora.com/What-are-the-most-popular-computer-programming-jokes",

  worthwhile() {
    if (this.isChallenging === true && this.isRewarding === true) {
      console.log(
        `Learning the programming languages: JavaScript, Python, Ruby, Go is rewarding and challenging`
      );
    } else {
      console.log(`Condition NOT matched`);
    }
  },
};

programming.languages.push("Go");
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

for (const el of programming.languages) {
  console.log(el);
}

for (const keys in programming) {
  console.log(keys);
}
for (const values in programming) {
  console.log(programming[values]);
}

programming.worthwhile();

// If we do not call a method (function), nothing will happen, no error and we get '[Function: worthwhile]'. we get function itself.

console.log(`******06-Changed-Programming-Object******`);

console.log(programming);
