let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // [1,4,3]

console.log(`#2----------------`);
console.log(`#3----------------`);

console.log(Math.sqrt(37));

console.log(`#4----------------`);

let list1 = [1, 6, 3, 2];
let list2 = [-1, -6, -3, -2];
let list3 = [2, 2];

console.log(Math.max(...list1));
console.log(Math.max(...list2));
console.log(Math.max(...list3));

console.log(`#5----------------`);
console.log(`#6----------------`);

let allMatches = function (words, regex) {
  return words.filter((word) => regex.test(word));
};

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

console.log(`#7----------------`);
console.log(`#8----------------`);
console.log(`#9----------------`);
console.log(`#10----------------`);
