function reverse(inputForReversal) {
  let newCollection;

  function reverseString(string) {
    newCollection = '';
    for (let i = string.length - 1; i >= 0 ; i --) {
      newCollection += string[i];
    }
  }

  function reverseArray(array) {
    newCollection = [];
    for (let i = array.length - 1; i >= 0 ; i --) {
      newCollection.push(array[i]);
    }
  }

  if (Array.isArray(inputForReversal)) {
    reverseArray(inputForReversal);
  } else {
    reverseString(inputForReversal);
  }

  return newCollection;
}

// ----------------fixing buggy solution -------------
// function reverse(inputForReversal) {
//   if (Array.isArray(inputForReversal)) {
//     return reverseArray(inputForReversal);
//   } else {
//     return reverseString(inputForReversal);
//   }
// }
//
// function reverseArray(inputForReversal) {
//   let reversed = [];
//   const length = inputForReversal.length;
//
//   for (let i = 0; i < length; i += 1) {
//     // console.log(inputForReversal[i]);
//     // console.log(`i is ${i}`)
//
//     reversed[length - 1 - i] = inputForReversal[i];
//   }
//
//   return reversed;
// }
//
// function reverseString(inputForReversal) {
//   const stringArray = inputForReversal.split('');
//   return reverseArray(stringArray).join('');
// }

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []
console.log()
const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
