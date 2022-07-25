/*
If both start and end are positive integers, start is less than end, and both are within the boundary of the string, return the substring from the start index (inclusive), to the end index (NOT inclusive).
If the value of start is greater than end, swap the values of the two, then return the substring as described above.
If start is equal to end, return an empty string.
If end is omitted, the end variable inside the function isundefined. Return the substring starting at position start up through (and including) the end of the string.
If either start or end is less than 0 or NaN, treat it as 0.
If either start or end is greater than the length of the string, treat it as equal to the string length.

---------------------
- switch from length to using end index
- don't include the end index

- swap start and end if start is greater then end
- return empty string if start = end
- if end is undefined (omitted) return an empty string
- If either start or end is less than 0 or NaN, treat it as 0.
- If either start or end is greater than the length of the string, treat it as equal to the string length.

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




function substring(string, start, end) {
  let substring = '';
  if (!Number.isInteger(start)) {
    start = 0;
  }

  if (start > end ) {
    let temp = start;
    start = end;
    end = temp;
  }

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0) {
    start = string.length + start;
  }

  for (let i = start; i < string.length; i ++ ) {
    if (i >= end) {
      break;
    }
    substring = substring + string[i];
  }

  return substring;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
