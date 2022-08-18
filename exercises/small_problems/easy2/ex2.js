/*
Bannerize:
Write a function that will take a short line of text, and write it to the console log within a box.

create strings contants for top and middle lines

create helper function that adds a string starting at index two for a given number of times
  given number of times, given starting and ending string, add a specific string a specific number of times
  inputs(startString, endString, middleString, length)
  this will allow me to call the function on the top string adding dashes, spaces for the the blank middle and add a single string in the middle

  create
    dashLine
    blankLine
    textLine

  output the three lines in the correct order


*/

function expandText(startString, middleString, endString, length) {
  let newString = startString;
  for (let i = 0; i < length; i ++ ) {
    newString += middleString;
  }
  newString += endString
  return newString
}

function logInBox(string) {
  const START_CHARS_DASH      = '+-';
  const MIDDLE_CHARS_DASH     = '-';
  const END_CHARS_DASH        = '+-';

  const START_CHARS_MIDDLE    = '| ';
  const MIDDLE_CHARS_MIDDLE   = ' ';
  const END_CHARS_MIDDLE    = ' |';

  const length = string.length
  console.log(expandText(START_CHARS_DASH,      MIDDLE_CHARS_DASH,      END_CHARS_DASH,   length));
  console.log(expandText(START_CHARS_MIDDLE,    MIDDLE_CHARS_MIDDLE,    END_CHARS_MIDDLE, length));
  console.log(expandText(START_CHARS_MIDDLE,    string,                 END_CHARS_MIDDLE, 1));
  console.log(expandText(START_CHARS_MIDDLE,    MIDDLE_CHARS_MIDDLE,    END_CHARS_MIDDLE, length));
  console.log(expandText(START_CHARS_DASH,      MIDDLE_CHARS_DASH,      END_CHARS_DASH,   length));
}


logInBox('To boldly go where no one has gone before.');
logInBox('');
