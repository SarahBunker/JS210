/*
Write a function that takes two arguments:

a string to be split
a delimiter character
The function logs the split strings to the console, as shown below:

function splitString(string, delimiter) {
  // …
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

initializes an new string
iterate through characters with index
  if character equals the dilimiter
    print the string
    set the string to empty
    go to next iteration
  add character to string
  if last index
    print the string


edge cases
  dilimiter is empty string
  no dilimiter provided

*/

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return
  }

  if (delimiter === '') {
    for (let i = 0; i < string.length; i ++ ) {
      console.log(string[i]);
    }
    return
  }
  let substr = '';
  for (let i = 0; i < string.length; i++) {
    char = string[i];
    if (char === delimiter) {
      console.log(substr);
      substr = '';
      continue;
    }
    substr = substr.concat(char)
  }

  if (substr) {
    console.log(substr);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
// console.log(splitString('abc,123,hello world', ','));
// console.log(splitString('hello'));
// console.log(splitString('hello', ''));
// console.log(splitString('hello', ';'));
// console.log(splitString(';hello;', ';'));
