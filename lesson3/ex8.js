/*
need to convert both inputs to booleans
check if the inputs are true/false or false/true
    return true
or check if false / false or true true > return false
*/

function isXor(arg1, arg2) {
  if ((arg1 && arg2) || (!arg1 && !arg2)) {
    return false
  }

  return true
}

console.log(isXor(false, true)      === true);
console.log(isXor(true, false)      === true);
console.log(isXor(false, false)     === false);
console.log(isXor(true, true)       === false);

console.log(isXor(false,3)          === true);
console.log(isXor('a',undefined)    === true);
console.log(isXor(null,'')          === false);
console.log(isXor('2',23)           === false);

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false
