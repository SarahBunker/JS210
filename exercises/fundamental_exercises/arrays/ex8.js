function slice(array, begin, end) {
  let newArray = [];

  if (end > array.length) {
    end = array.length;
  }

  for (let i = begin; i < end; i ++ ) {
    newArray.push(array[i]);
  }

  return newArray;
}

function splice(array, start, deleteCount, ...args) {
  let deletedElements = slice(array, start, start + deleteCount);
  const copyArray = array.slice();


  // delete num of items from array
  let countDeleted = 0

  for (let i = 0; i < array.length; i ++ ) {
    if (i === start) {
      array[i] = array[i + deleteCount];
      countDeleted += 1
    }
    if (countDeleted === deleteCount) {
      break;
    }
  }

  array.length = copyArray.length - deleteCount;

  // add arguments to array
  let copyStartArray = array.slice(0, start)
  let copyEndArray = array.slice(start);

  array.length = 0;

  for (let i = 0; i < copyStartArray.length; i ++ ) {
    array.push(copyStartArray[i])
  }

  for (let i = 0; i < args.length; i ++ ) {
    array.push(args[i])
  }

  for (let i = 0; i < copyEndArray.length; i ++ ) {
    array.push(copyEndArray[i])
  }

  return deletedElements;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]
// console.log();
// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]
// console.log();
//
// console.log();
// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0));         // []
// console.log();
const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]
console.log();
const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]
console.log();
const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]
console.log();
const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
