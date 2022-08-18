function greetings (names, titles) {
  let name = names.join(' ');
  let title = titles['title'];
  let occupation = titles['occupation'];

  console.log(`Hello, ${name}! Nice to have a ${title} ${occupation} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
