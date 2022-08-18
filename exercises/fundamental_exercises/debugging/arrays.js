let array1 = [1, 2, undefined, 4];
console.log(array1.length === 4); // 4

let array2 = [1];
array2.length = 5;
console.log(array2.length === 5);

let array3 = [];
array3[-1] = [1];
console.log(array3.length === 0);

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
console.log(array4.length === 3);

let array5 = [];
array5[100] = 3;
console.log(array5.length === 101);

console.log('#2-------------------');
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach( function(element) {
  if (element % 2 !== 0 ) return;
  console.log(element);
});

console.log('#3------------------');

let logEvensArray = function(array) {
  array.forEach( function(element) {
    if (element % 2 !== 0 ) return;
    console.log(element);
  });
};

let myNestedArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myNestedArray.forEach(logEvensArray);

console.log('#4-------------------');

let myArrayToMap = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let mappedArray = myArrayToMap.map( function(element) {
  if (element % 2 === 0 ) return 'even';
  return 'odd';
}
);

console.log(mappedArray);

console.log('#5---------------------');

let findIntegers = function (array) {
  return array.filter( (element) => Number.isInteger(element));
};

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

console.log('#6--------------------');

let oddLengths = function (array) {
  let lengthsArray = array.map( (element) => element.length);
  return lengthsArray.filter( (element) => element % 2 !== 0 );
};


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

console.log('#7--------------------');

let sumOfSquares = function (array) {
  return array.reduce((total, element) => total + (element * element) , 0);
};

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

console.log('#8----------------------');

// let reduceOddLengths = function (array) {
//   let reduceLengths = function(originalArray, item) {
//     console.log(`originalarray: ${originalArray}`);
//     originalArray.push(item.length);
//   };
//   let lengths = array.reduce( reduceLengths, []);
//   return lengths.reduce( function(arrayO, item) {
//     if (item % 2 === 0) return arrayO;
//     console.log(array);
//     return arrayO.push(item);
//   } ,  []);
// };

let reduceOddLengths = function (array) {
  return array.reduce( function(newArray, element) {
    let length = element.length;
    if (length % 2 === 1) {
      newArray.push(length);
    }

    return newArray;
  }, []);
};

let stringArr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(reduceOddLengths(stringArr)); // => [1, 5, 3]

console.log('#9-------------------');

let checkFor = function (array, findItem) {
  // let foundItems = array.filter( (element) => element === findItem);
  // return foundItems.length >= 1;
  return array.includes(findItem);
};

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(checkFor(numbers1, 3) === true);
console.log(checkFor(numbers2, 3) === false);
console.log(checkFor(numbers3, 3) === false);

console.log('#10---------------------');

let arr10 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr10[1][3] = 606;

console.log(arr10);
