/*
create a rot13 cipher

if the character is in the alphabet change it to the letter 13 positions away.
preserve case
doesn't modify non alphabet characters
reach end of alphabet return to beginning

examples
  a becomes n
  A becomes N
  o becomes b

set new empty string
iterate through characters
if character is not a letter, just add it
if characters is a letter
  get ascii code of letter
  add 13
  check if character is in the last half of the alphabet
    greater or equal to n, less then or equal to z.
    check for both upper and lower case

    subtract 26 from code // to go around the alphabet
  convert to character
  add to string

*/

// jshint esversion: 6

function isLetter(char) {
  return char.match(/[A-Z]/i);
}

function cipherWrapsAlphabet(char) {
  return (char.toLowerCase() >= 'n' && char.toLowerCase() <= 'z' );
}

function rot13(string) {
  const  ROTATION = 13;
  const NUM_LETTERS_ALPHABET = 26;
  let newString = '';

  for (let index = 0; index < string.length; index ++ ) {
    let char = string[index];

    if (!isLetter(char)) {
      newString += char;
      continue;
    }

    let code = string.charCodeAt(index);
    code += ROTATION;

    if (cipherWrapsAlphabet(char)) {
      code -= NUM_LETTERS_ALPHABET;
    }

    char = String.fromCharCode(code);
    newString += char;
  }
  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
