// Let’s write some functions! Write these in the script tag of a skeleton HTML file. If you’ve forgotten how to set it up, review the instructions from Fundamentals Part 1.

// For now, just write each function and test the output with console.log.

// Write a function called add7 that takes one number and returns that number + 7.
function add7(number){
    return number + 7;
}
// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(n1, n2){
    return n1 * n2;
}
// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
                    // or
    // return str.chatAt(0).toUpperCase() + str.slice(1);
}
// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"
function lastLetter(str){
    return str.slice(-1);
}