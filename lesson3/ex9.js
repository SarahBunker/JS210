/*
Guess the password:
app tracks how many times the user enters the wrong password
  if 3+ times log 'You have been denied access.' and terminate the program
  if
Program to allow user to login
  prompt user for password
  if password is incorrect


  if passoword is correct
    log 'You have successfully logged in.' and end the program.

------------
outside of loop set message to 'You have successfully logged in.'
Program that loops until correct login
  prompt user for password
  exit if login is correct

  add one to log of failed attempts
  if failed attempts is 3+
    set message to 'You have been denied access.'
    terminate the program

outside of loop display message
*/

let rlSync = require('readline-sync');

const password = 'password';

function passwordProgram() {
  let attempt = '';
  let numattempts = 0;

  let message = 'You have been denied access.'
  for ( let numAttempts = 1; numAttempts <= 3; numAttempts ++) {
    attempt = rlSync.question("What is the password? ");
    if ( attempt === password ) {
      message = 'You have successfully logged in.'
      break
    }
  }
  console.log(message);
}


// function loginMessage (attempt) {
//   return attempt === password ? 'You have successfully logged in.' : 'You have been denied access.';
// }
  // let message = 'You have successfully logged in.'
  // while (attempt !== password) {
  //   attempt = rlSync.question("What is the password? ");
  //   if (attempt === password) {
  //     break
  //   }
  //   numattempts += 1;
  //   if (numattempts >= 3) {
  //     message = 'You have been denied access.';
  //     break
  //   }
  // }

//   console.log(message);
//
// }

passwordProgram();
