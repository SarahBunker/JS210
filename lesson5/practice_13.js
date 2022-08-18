function hasProperty(obj, propertyName) {
  let keys = Object.keys(obj);
  return keys.indexOf(propertyName) !== -1;
}

function incrementProperty(obj, propertyName) {
  if (!hasProperty(obj, propertyName)) {
    obj[propertyName] = 0;
  }

  obj[propertyName] += 1;
}

function countCharacters(word) {
  let letters = word.toLowerCase().split('');
  let count = {}
  letters.forEach((letter) => incrementProperty(count, letter));
  return count;
}

function repeatedCharacters(word) {
  let count = countCharacters(word);
  let repeatChars = {};
  for (let char in count) {
    if (count[char] > 1) {
      repeatChars[char] = count[char];
    }
  }
  return repeatChars;
}

console.log(repeatedCharacters('Programming'));// === { r: 2, g: 2, m: 2 });

console.log(repeatedCharacters('Programming') ); //=== { r: 2, g: 2, m: 2 });    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination') ); //=== { o: 2, i: 2, n: 2 });    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet')         ); //=== {});            // {}
console.log(repeatedCharacters('Paper')       ); //=== { p: 2 });          // { p: 2 }
console.log(repeatedCharacters('Baseless')    ); //=== { s: 3, e: 2 });       // { s: 3, e: 2 }
