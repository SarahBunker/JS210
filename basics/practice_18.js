let apples = 3;
let bananas = 1;
let areEqual = (apples === bananas);

console.log(`areEqual: ${areEqual}`);

if (apples === bananas) {
  console.log('Strictly Equal');
} else {
  if (apples == bananas) {
    console.log('Loosly Equal');
  } else {
    console.log('Not Equal');
  }
}

let eitherOr = (apples || bananas);
console.log(`eitherOr: ${eitherOr}`)

bananas = 1
eitherOr = (apples || bananas);
console.log(`eitherOr: ${eitherOr}`)

eitherOr = (bananas || apples);
console.log(`eitherOr: ${eitherOr}`)

let lastName = 'Bunker';
let familyMessage;

familyMessage = (lastName === 'Bunker' ? "You're part of the family!" : "You're not family.");
console.log(familyMessage);

lastName = 'Jones';
familyMessage = (lastName === 'Bunker' ? "You're part of the family!" : "You're not family.");
console.log(familyMessage);
