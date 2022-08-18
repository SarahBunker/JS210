const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';  // adds '3.4': Oranges
console.log(array.length);  // 3, doesn't include properties with nonidex keys
console.log(Object.keys(array).length);  // 4 includes all properties

array[-2] = 'Watermelon'; // adds '-2': "Watermelon"
console.log(array.length); // length is still 3
console.log(Object.keys(array).length);  // now there are 5 properties
