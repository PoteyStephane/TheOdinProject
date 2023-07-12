// # Exercise 02 - repeatString

// Write a function that simply repeats the string a given number of times:

// ```javascript
// repeatString('hey', 3) // returns 'heyheyhey'
// ```

// function repeatString(str, num) {
//   let string = "";

//   for (let i = 0; i < num; i++) {
//     string += str;
//   }
//   return string;
// }

// console.log(repeatString("allo", 3));

const repeats = function (str, num) {
  let string = "";
  for (let i = 0; i < num; i++) {
    string += str;
  }
  return string;
};

console.log(repeats("allo", 3));
