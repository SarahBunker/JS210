
//
// console.log(typeof speak);
//
// var speak = function() {
//   console.log('Howdy!');
// };

// "use strict";
//
// console.log(typeof speak);
//
// let speak = function() {
//   console.log('Howdy!');
// };

console.log('#3--------------');

// let me = {
//   name: 'Sarah',
//   name: 'Sarah Bunker'
// };
//
// console.log(me.name);


console.log('#4--------------');
console.log('#5--------------');

// let concatenateMaker = function(string1) {
//   return function(string2) {
//     return string1 + string2;
//   };
// };
//
// let concatenate = function(string1, string2) {
//   if (string2 === undefined) {
//     return concatenateMaker(string1);
//   }
//   return string1 + string2;
// };
//
// console.log(concatenate('ab', 'cd') === 'abcd');            // true
// console.log(concatenate('cba', 'xyz') === 'cbaxyz');        // true
//
// const fooCat = concatenate('foo');
// console.log(fooCat('bar') === 'foobar');                    // true
// console.log(fooCat('xyzzy') === 'fooxyzzy');                // true

console.log('#6--------------');

// let greeting = 'Hi';
//
// function greet(name) {
//   return `${greeting}, ${name}.`;
// }
//
// greeting = 'Hello';
// console.log(greet('Jackie'));

console.log('#7--------------');

// var a = a + 1;
// console.log(a);

console.log('#8--------------');
console.log('#9--------------');
console.log('#10--------------');

// let foo = 42;
// let bar = 43;
//
// function greet(name) {
//   greeting = 'Hello';
//   return greeting + ' ' + name;
// }
//
// greet('Pete');
//
// console.log(foo); // 42
// console.log(bar); //43
// console.log(greeting); // Hello

console.log('#11--------------');

// let counter = 0;
//
// function incrementCounter() {
//   counter += 1;
// }
//
// incrementCounter();
// console.log(counter);

console.log('#12--------------');

// let counter = 0;
//
// function incrementCounter() {
//   var counter = counter + 1;
// }
//
// incrementCounter();
// console.log(counter);

console.log('#13--------------');

// let counter = 0;
//
// function incrementCounter(counter) {
//   counter += 1;
// }
//
// incrementCounter(counter);
// console.log(counter);

console.log('#14--------------');

// function run() {
//   go();
//   return function go() { console.log('Go was called') };
// }
//
// run();


// function run() {
//   let go = function go() {
//     console.log('Go was called');
//   };
//   go();
//   return go;
// }
//
// run();

console.log('#15--------------');
console.log('#16--------------');

// function greet(name) {
//   console.log('Hello ' + name);
// }
//
// greet('Jim', 'George');

console.log('#17--------------');

// function swapEnds(arr) {
//   let first = arr[0];
//   let last = arr[arr.length - 1];
//
//   arr[0] = last;
//   arr[arr.length - 1] = first;
//   return arr;
// }
//
// let numbers = [1, 2, 3, 4];
// let swappedNumbers = swapEnds(numbers);
//
// console.log(numbers);
// console.log(swappedNumbers);

console.log('#18--------------');

// function swapEnds(arr) {
//   let newarray = arr.slice();
//   let first = arr[0];
//   let last = arr[arr.length - 1];
//
//   newarray[0] = last;
//   newarray[arr.length - 1] = first;
//   return newarray;
// }
//
// let numbers = [1, 2, 3, 4];
// let swappedNumbers = swapEnds(numbers);
//
// console.log(numbers);
// console.log(swappedNumbers);

console.log('#19-------------');

// let student = {
//   firstName: "Sarah",
//   lastName: "Bunker",
//   semester: "Fall",
//   dateOfBirth: new Date('September 24,, 1992'),
//   grades: {
//     math: "A",
//     physics: "A",
//     english: "B",
//   },
// };
//
// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.semester);
// console.log(student.dateOfBirth);
// console.log(student.grades.math);


console.log('#20--------------');

function isEmpty(value) {
  let type = typeof value;
  if (type === 'string') {
    return value.length === 0;
  }
  if (type === 'object' && Array.isArray(value)) {
    return Object.keys(value).length === 0 && value.length === 0;
  }
  if (type === 'object') {
    return Object.keys(value).length === 0;
  }
  return "Error";
}

// current test cases
console.log(isEmpty({})                 === true);                  // true
console.log(isEmpty({ name: 'Janice' }) === false);  // false

console.log(isEmpty('')                 === true);                  // true
console.log(isEmpty('Janice')           === false);            // false

console.log(isEmpty([])                 === true);                  // true
console.log(isEmpty(['Janice'])         === false);          // false

let scores = [];
console.log(isEmpty(scores)                 === true);
let scoresComplete = [10, 10, 10, 10];

scores["total"] = 0;
scoresComplete["total"] = 0;

console.log(scores);
console.log(scoresComplete);

console.log(isEmpty(scores)                 === false);
console.log(isEmpty(scoresComplete)         === false);

scores = [];
scores.length = 5;
console.log(scores);

console.log(isEmpty(scores)                 === false);
