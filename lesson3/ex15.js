/* Trimming Spaces
Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.

Example
trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

start = find index of first nonspace character
  return empty string if no nonspace characters
end = find index of last nonspace character

iterate from start to end indices adding characters to new empty string
return empty string

*/

function findIndexFirstNonSpace(string) {
  let foundIndex = -1;
  for (let index = 0; index < string.length; index ++) {
    if (string[index] != ' ') {
      return index;
    }
  }
  return foundIndex;
}

function findIndexLastNonSpace(string) {
  let foundIndex = -1;
  for (let index = 0; index < string.length; index ++) {
    if (string[index] != ' ') {
      foundIndex = index
    }
  }
  return foundIndex;
}

console.log(findIndexFirstNonSpace('abc')); //0
console.log(findIndexFirstNonSpace(' abc'));  //1
console.log(findIndexFirstNonSpace('   ')); // null
console.log(findIndexFirstNonSpace(' a  bc'));  //1

console.log(findIndexLastNonSpace('abc')); //2
console.log(findIndexLastNonSpace(' abc'));  //3
console.log(findIndexLastNonSpace('   ')); // null
console.log(findIndexLastNonSpace(' a  bc'));  //5
console.log(findIndexLastNonSpace(' a  bc '));  //5

function trim(string) {
  let startIndex = findIndexFirstNonSpace(string);
  if (startIndex === -1) {
    return '';
  }
  let stop = findIndexLastNonSpace(string);

  let newString = '';

  for (let index = startIndex; index <= stop; index += 1) {
    newString += string[index];
  }

  return newString;
}

// start = find index of first nonspace character
//   return empty string if no nonspace characters
// end = find index of last nonspace character
//
// iterate from start to end indices adding characters to new empty string
// return empty string

console.log(trim('   abc   '));
console.log(trim('abc    '));
console.log(trim(' ab c'));
console.log(trim(' a b c  '));
console.log(trim('      '));
console.log(trim(''));
