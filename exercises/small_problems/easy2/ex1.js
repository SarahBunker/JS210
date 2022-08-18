/*
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

input string, output string with duplicate characters removed

set new string to empty string
set new char to empty string
iterate through string
  skip if char equals newchar
  set new char to char
  add char to new string
return new string

*/

function crunch(string) {
  let newString = '';
  let newChar = '';

  for (let i = 0; i < string.length; i ++ ) {
    if (string[i] === newChar) {
      continue;
    }
    newChar = string[i];
    newString += newChar;
  }
  return newString
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
