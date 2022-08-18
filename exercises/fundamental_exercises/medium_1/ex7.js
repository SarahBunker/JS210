function invoiceTotal(...amounts) {
  let sum = 0;
  for (let i = 0; i < amounts.length; i += 1) {
    sum += amounts[i];
  }
  return sum;
}

console.log(invoiceTotal(20, 30, 40, 50)        );          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?
