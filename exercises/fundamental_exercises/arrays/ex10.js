function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length ) {
    return false
  }

  let copyArr1 = array1.slice();
  let copyArr2 = array2.slice();

  copyArr1.sort();
  copyArr2.sort();

  for (let i = 0; i <= array1.length; i ++ ) {
    if (copyArr1[i] !== copyArr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) === true);                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]) === true);                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true);      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) === false);                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) === true);            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) === false);            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) === false);            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) === false);                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]) === false);                     // false
console.log(areArraysEqual([1, 1], [1, 1]) === true);                        // true
