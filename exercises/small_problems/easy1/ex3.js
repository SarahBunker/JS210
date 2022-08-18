const rlsync = require('readline-sync');

function roomSize() {
  const M_TO_FT = 10.7639 // 1 square meter == 10.7639 square feet

  console.log("Enter the length of the room in meters:");
  const length = rlsync.prompt();
  console.log("Enter the width of the room in meters:");
  const width = rlsync.prompt();

  const area = width * length;
  const areaft = area * M_TO_FT
  console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaft.toFixed(2)} square feet).`)
}

roomSize()
