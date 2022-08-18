let dogs = ['Rocky', 'Princess', 'Duchess', 'Dupree', 'Mckay'];

function lastInArray (arr) {
  return arr[arr.length - 1];
}

console.log(lastInArray(dogs)); // Mckay
console.log(dogs[-1]);          // undefined

function rollCall(arr) {
  for (let i = 0; i < arr.length; i ++ ) {
    console.log(arr[i]);
  }
}

rollCall(dogs);

function reverseArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i -- ) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log('---------reverse----------');

rollCall(reverseArray(dogs));

function joinArrayString (arr) {
  let newString = '';
  for (let i = 0; i < arr.length; i ++ ) {
    newString += String(arr[i]);
  }
  return newString;
}

console.log(joinArrayString(dogs));
