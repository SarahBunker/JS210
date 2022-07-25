/*
prompt to get three grades

find average of three scores
initialize letter grade to F
series of if statments
  check if grade is above 90 , 70 , 50 alter grade
log grade to console

*/

const rlSync = require('readline-sync');

function letterGrade() {
  let numberGrades = [];
  for (let scoreNum = 1; scoreNum <= 3; scoreNum ++ ) {
    let score = rlSync.question(`Enter score ${scoreNum}: `);
    score = Number(score);
    numberGrades.push(score);
  }

  let total = numberGrades.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });

  const average = total / numberGrades.length;

  let letGrade = 'F';
  if (average >= 90) {
    letGrade = 'A';
  } else if (average >= 70) {
    letGrade = 'B';
  } else if (average >= 50) {
    letGrade = 'C';
  }

  console.log(`Based on the average of your 3 scores your letter grade is "${letGrade}".`)
}

letterGrade()
