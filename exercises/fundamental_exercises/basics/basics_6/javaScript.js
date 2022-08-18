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
