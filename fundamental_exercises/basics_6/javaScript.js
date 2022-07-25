const readlineSync = require("readline-sync");

let phrase //= readlineSync.question("Please enter a phrase: ");
phrase = "The women's cat can fly."
let simplePhrase = phrase;

whitespace = /\s/g;
nonAlpha = /[^a-zA-Z]/g;
simplePhrase = simplePhrase.replace(whitespace, "");
simplePhrase = simplePhrase.replace(nonAlpha, "");

let numChars = simplePhrase.length;
console.log(`There are ${numChars} characters in "${phrase}".`);

console.log("53" > "6");

let foo;
foo = false;     // returns false

// for (let index = 0; ; index += 1) {
//   console.log(index);
//   if (index > 10) {
//     break;
//   }
// }

for (let index = 0; index <= 10; index++) {
  console.log(index);
}
