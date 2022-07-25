/*
Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

The indexOf function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

The lastIndexOf function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

Both functions return -1 if firstString does not contain the substring specified by secondString.

function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

-----indexOf
set foundIndex to -1
iterate through each character in firstString with index
  check if the characters match in firstString match the characters in the secondString
    return index
return foundIndex

given index and two strings
check if the characters match in firstString match the characters in the secondString
have index of firstString and index of second string
index of second string starts at 0 and breaks iteration when reaches secondstring length
  return false if firstString at firstString index != secondString at secondString index
after going through all characters return true
*/

function matchSubstring(firstString, secondString, firstStringIndex) {
  for (let secondStringIndex = 0; secondStringIndex < secondString.length; secondStringIndex ++ ) {
    if (firstString[firstStringIndex] != secondString[secondStringIndex]) {
      return false;
    }
    firstStringIndex ++;
  }
  return true;
}

function indexOf(firstString, secondString) {
  let foundIndex = -1;
  for (let index = 0; index < firstString.length; index += 1 ) {
    if (matchSubstring(firstString, secondString, index)) {
      foundIndex = index;
      return index;
    }
  }
  return foundIndex;
}

function lastIndexOf(firstString, secondString) {
  let foundIndex = -1;
  for (let index = 0; index < firstString.length; index += 1 ) {
    if (matchSubstring(firstString, secondString, index)) {
      foundIndex = index;
    }
  }
  return foundIndex;
}

console.log(matchSubstring('Blue Whale', 'Whale', 5));
console.log(matchSubstring('Blue Whale', 'Whale', 4));

console.log(matchSubstring('Some strings', 's', 5));
console.log(matchSubstring('Blue Whale', 'blue', 4));

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                   // -1
console.log(indexOf('Blue Whale', 'leB'));                     // -1

console.log(lastIndexOf('Some Strings', 's'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));
