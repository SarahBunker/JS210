/*
Right triangles
write a function that takes a positive integer n
logs a right triangle that has sides each have n stars

the index stars start is two less then n
n = 5
stars start at index 3

add 4 spaces and then add one star
add 3 spaces and then add 2 stars

set starting number of spaces as n - 1
set starting number of stars to 1

iterate n times
  break if number of stars is greater then n
  set string to empty
  iterate to number of spaces
    add one space
  iterate to number of stars
    add one star
  substract one from spaces
  add one to stars
  print string
*/

function triangle(n) {
  let numspaces = n-1;
  let numstars = 1;

  while (numstars <= n) {
    let string = '';
    for (let i = 1; i <= numspaces; i ++) {
      string += ' ';
    }

    for (let i = 1; i <= numstars; i ++ ) {
      string += '*';
    }

    numspaces --;
    numstars ++;

    console.log(string);
  }
}

triangle(5);

triangle(9);
