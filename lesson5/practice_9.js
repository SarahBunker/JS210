// function that converts radians to degrees

function radToDeg(radian) {
  return radian * 180 / Math.PI
}

console.log(radToDeg(2*Math.PI) === 360);

let integer2 = 180;

console.log(Math.abs(integer2));

let integer3 = 16777216;

console.log(Math.sqrt(integer3));

console.log(Math.pow(16,6));

let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

function randomInt (min, max) {
  if (min > max) {
    [min, max] = [max, min];
  } else if (min === max) {
    return min;
  }

  let range = max - min;
  let decimal = Math.random();
  return parseInt((range + 1) * decimal + min);
  // note from lesson
  // use Math.floor(Math.random() * (max - min + 1) + min) to map random numbers between 0 to 1 to integers in the specified range
}

console.log(randomInt(1,10));

for (let i = 1; i <= 20; i ++ ) {
  console.log(randomInt(1,10));
}
