// # Exercise 03 - Reverse a String

// Pretty simple, write a function called `reverseString` that returns its input, reversed!

// ```javascript
// reverseString('hello there') // returns 'ereht olleh'
// ```

// You will notice in this exercise that there are multiple tests (in the file `reverseString.spec.js`). Currently, only the first test is enabled. After ensuring that the first test passes, enable the remaining tests one by one by removing the `.skip` from the `test.skip()` function.

// ## Hints
// Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.

// FIRST METHOD
// let str = "hello there 123!";
// let word = str.split("").reverse().join("");
// console.log(word);
// console.log(word.reverse().join(""));
/**************************************************************** */

/**SECOND METHOD */
// let str = "hello there";
// let arrayStr = str.split("").join("");
// let newString = "";
// console.log(typeof arrayStr);

// for (let i = arrayStr.length - 1; i >= 0; i--) {
//   newString += str[i];
// }
// console.log(newString);

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str.charAt(i));
// }

// function checkPalindrome(str) {
//   let arrayStr = str.split("").reverse().join("");

//   if (arrayStr === str) {
//     console.log("is palindrome");
//     console.log(arrayStr);
//     console.log(str);
//   } else {
//     console.log("not a palindrome");
//     console.log(arrayStr);
//     console.log(str);
//   }
// }

checkPalindrome("qwlla");
