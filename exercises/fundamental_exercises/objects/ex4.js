// const myObject = {
//   "prop1": '123',
//   "prop2": '234',
//   'prop 3': '345',
// };
//
// const prop2 = '456';
// myObject['prop2'] = '456';  // modifying prop2: '456'
// myObject[prop2] = '678';    // adding '456': '678'
//
// console.log(myObject[prop2]); // '678'
// console.log(myObject.prop2); // '456'


const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);
