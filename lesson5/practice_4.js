// #1 ---------------------------------------------------

// function objectHasProperty(object, property) {
//   return object[property] !== undefined;
// }

function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true

console.log('#2 -----------------------------------')

function incrementProperty(object, propertyName) {
  if (!objectHasProperty(object, propertyName)) {
    object[propertyName] = 0;
  }

  object[propertyName] += 1;
  return object[propertyName];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

console.log('#3 -----------------------------------')

function copyProperties(objectOriginal, objectCopy) {
  for (let key in objectOriginal) {
    objectCopy[key] = objectOriginal[key];
  }
  return Object.keys(objectOriginal).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }

console.log('#4 -----------------------------------')

// function wordCount(string) {
//   let words = string.split(' ');
//   let countObject = {};
//   for (let i = 0; i < words.length; i ++) {
//     word = words[i];
//     incrementProperty(countObject, word);
//   }
//
//   return countObject;
// }

function wordCount(string) {
  let words = string.split(' ');
  let countObject = {};
  words.forEach((word) => incrementProperty(countObject, word));
  return countObject;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }

console.log('# ---------------------')

let myArray = [1, 2, 3];
myArray.length; // returns 3

// setting to a larger value than the current largest array index
myArray.length = 5;
console.log(myArray); // logs (5) [1, 2, 3, empty × 2] on Chrome Console
// logs [1, 2, 3, <2 empty slots>] on Firefox console
// logs [1, 2, 3, <2 empty slots>] on node REPL
myArray.length; // returns 5

myArray[6] = "foo";
myArray.length; // returns 7
console.log(myArray); // logs (7) [1, 2, 3, empty × 3, "foo"] on Chrome Console
// logs [1, 2, 3, <3 empty slots>, "foo"] on Firefox console
// logs [1, 2, 3, , , , 'foo'] on node REPL

// setting to a smaller value than the current largest array index with value
myArray.length = 2;
console.log(myArray); // logs [1, 2]

myArray.length = 5;
console.log(myArray); // logs (5) [1, 2, empty × 3] on Chrome Console
// logs [1, 2, <3 empty slots>] on Firefox console
// logs [1, 2, , ,] on node REPL
myArray.length; // returns 5

console.log(Object.keys(myArray).length);
