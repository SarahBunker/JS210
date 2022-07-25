/*
The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.

The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
  - if you call it on a string with multiple characters you can use the index to get the ACII code at different indices in the code.

write a function to convert a string to lowercase.
let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase
add 32 to the number and then convert back to character.

new string
iterate through characters
  convert character to code
  add 32
  convert back to character
  add to new string
return new string

*/

function isUpperCase(str) {
  return str.length === 1 && str.match(/[A-Z]/);
}

function toLowerCase(string) {
  let newString = '';

  for (let i = 0; i < string.length; i ++ ) {
    if (!isUpperCase(string[i])) {
      newString = newString + string[i];
      continue;
    }
    let code = string[i].charCodeAt();
    code += 32;
    let newChar = String.fromCharCode(code);
    newString = newString + newChar;
  }

  return newString;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
