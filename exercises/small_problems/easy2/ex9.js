/*
Clean Up the Words
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

takes string
- change non-alphabetic characters to spaces
- don't have consecutive spaces
return new String

initialize new string
initialize last character added
iterate through characters of string
  if string is alphabetic > add to new string, change last character added to character
  if last character added is a space > skip itteration
  add space to string
  change last character added to space
return new string
*/

function isAlphabetic(char) {
  return !!char.match(/[a-z]/i);
}

function cleanUp(string) {
  let newString = '';
  let lastCharAdded;

  for (let i = 0; i < string.length; i ++ ) {
    let char = string[i];
    if (isAlphabetic(char)) {
      lastCharAdded = char;
      newString += char;
      continue;
    }

    if (lastCharAdded === ' ') {
      continue;
    }

    lastCharAdded = ' ';
    newString += ' ';
  }

  return newString
}

console.log(isAlphabetic('a'));
console.log(isAlphabetic('1'));

console.log(cleanUp("---what's my +*& line?"));

console.log(cleanUp("---what's my +*& line?") === " what s my line ");
