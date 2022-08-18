let myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

function copy(array) {
  let newArray = [];

  for(let i = 0; i < array.length; i ++ ) {
    newArray.push(array[i]);
  }

  return newArray;
}
