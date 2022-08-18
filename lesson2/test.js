let count = [1, 2, 3];
count[3] = 4;
console.log(count);            // [ 1, 2, 3, 4 ]
console.log(count.length);     // 4

// continue from the previous code snippet
count[5] = 5;
count[9] = 9;
console.log(count[9]);         // returns 9
console.log(count.length);     // 10

// continue from the previous code snippet
console.log(count);            // [ 1, 2, 3, 4, empty x 1, 5, empty x 3, 9 ]
console.log(count[4]);         // undefined
