/*
Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

input Strin
output sum of the utf-16 string values of each character.
iterate through string
  calculate utf value of chracter
  add to return value

return the total

*/

function utf16Value(string) {
  let value = 0
  for (let i = 0; i < string.length; i ++ ) {
    value += string[i].charCodeAt();
  }
  return value
}

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value('Four score')            === 984);         // 984
console.log(utf16Value('Launch School')         === 1251);      // 1251
console.log(utf16Value('a')                     === 97);                  // 97
console.log(utf16Value('')                      === 0);                   // 0
console.log(utf16Value(OMEGA)                   === 937);                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA)   === 2811);  // 2811
