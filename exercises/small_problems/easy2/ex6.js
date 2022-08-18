/* Madlib
create a madlib program that takes a noun, verb, adverb, and an adjective, then injects into story

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
*/

const rlsync = require('readline-sync');

const noun = rlsync.question("Enter a noun: ");
const verb = rlsync.question("Enter a verb: ");
const adjective = rlsync.question("Enter a adjective: ");
const adverb = rlsync.question("Enter a adverb: ");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`)
