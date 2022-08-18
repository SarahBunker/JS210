function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

let array1 = [1, 5];
let array2 = [2, 3];

console.log(productOfSums(array1, array2));
