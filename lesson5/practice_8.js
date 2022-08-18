console.log('#1-----------------')
/*
mutates the array passed in, in this case the array `qux`
logs to console
*/

console.log('#2-----------------')

//////// pure functions

// function 2
function sum(a, b) {
  a + b;
}                    // implicit return of undefined for all inputs, still pure function

// function 3
function sum(a, b) {
  return a + b;
}

// function 5
function sum(a, b) {
  return 3.1415;
}

/////// not pure functions

// function 1
function sum(a, b) {
  console.log(a + b);
  return a + b;
}

// function 4
function sum(a, b) {
  return a + b + Math.random();
}
