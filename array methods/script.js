let array = ["hello", "john", "doe"];

// console.log("array length : " + array.length);
// console.log("array to string with commas: " + array.toString());
// console.log("array to string without commas: " + array.join(" "));

let popArray = array.pop();
console.log("popped element from an array : " + popArray);
console.log("new array after last element removed : " + array);

// Merging (Concatenating) Arrays
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log("Array concac : " + myChildren);

/***Splice method*/
// let arraySplice = ["piano", "drum"];
// console.log("Array splice : " + arraySplice);
// arraySplice.splice(1, 0, "Allo");
// console.log(arraySplice);

/**Affection */
// const sumAll = function (min, max) {
//   /**Echange de valeur */
//   if (min > max) {
//     const temp = min;
//     min = max; /**min prend la valeur de max */
//     max = temp; /**max prend la valeur de temp */
//   }
//   return console.log("min : " + min + " max : " + max);
// };

// console.log(sumAll(7, 2));

/**Leap year */
function checkLeapYear(num) {}

let a = 1987;

if (a % 2 != 0) {
  console.log("not divisible by 2" + (a % 2));
}

console.log(100 % a);
