
function multisum(otherNum) {
  let total = 0;
  for (let num = 1; num <= otherNum; num ++) {
    if (num % 3 === 0 || num % 5 === 0 ) {
      total += num;
    }
  }
  return total;
}

console.log(multisum(3) === 3);       // 3
console.log(multisum(5) === 8);       // 8
console.log(multisum(10) === 33);      // 33
console.log(multisum(20) === 98);      // 33
console.log(multisum(1000) === 234168);    // 234168
