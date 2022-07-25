/*
return substring of string based on starting index and length

start argument is starting index
  negative treat it ias strLength + start

length argumet is the max length f the desired substring.
  if length exceeds the length of available characters, just use available characters

initialize substring
determine starting index from input
iterate through from the starting index to the length of the string
  stop if length of substring matches length input
  add characters from string using index to substring
return substring

negative and 0 lengths return an empty string


*/

function substr(string, start, length) {
  let substring = '';

  if (start < 0) {
    start = string.length + start;
  }

  for (let i = start; i < string.length; i ++ ) {
    if (substring.length >= length) {
      break;
    }

    substring = substring + string[i];
  }

  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
