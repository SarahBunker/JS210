let today = new Date();
console.log(today);

function dateSuffix(day) {
  let dayString = String(day);
  let suffix;
  if (dayString.endsWith('13') || dayString.endsWith('12') || dayString.endsWith('111')) {
    suffix = 'th';
  } else if (dayString.endsWith('1')) {
    suffix = 'st';
  } else if (dayString.endsWith('2')) {
    suffix = 'nd';
  } else if (dayString.endsWith('3')) {
    suffix = 'rd'
  } else {
    suffix = 'th'
  }
  return suffix
}

function formattedMonth(dateObject) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let indexMonth = dateObject.getMonth();
  let dayOfMonth = dateObject.getDate();
  return `${months[indexMonth]} ${dayOfMonth}${dateSuffix(dayOfMonth)}`

}

function formattedDay(dateObject) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let indexDay = dateObject.getDay();
  return `${daysOfWeek[indexDay]}`
}

function formattedDate(dateObject) {
  return `Today's day is ${formattedDay(dateObject)}, ${formattedMonth(dateObject)}`
}

function formatTime(dateObject) {
  let hours = String(dateObject.getHours());
  let minutes = String(dateObject.getMinutes());

  if (hours.length === 1) {
    hours = '0' + hours;
  }

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }

  return hours + ":" + minutes;
}

console.log(formattedDate(today));

console.log(today.getFullYear());
console.log(today.getYear());

console.log(today.getTime());

let tomorrow = new Date();
tomorrow.setTime(today.getTime());
tomorrow.setDate(today.getDate() + 1);

console.log(formattedDate(tomorrow));

let nextWeek = new Date();
nextWeek.setTime(today.getTime());

let bool = nextWeek === today;
console.log("nextWeek and this week are the same? " + bool);
bool = nextWeek.toDateString() === today.toDateString();
console.log("nextWeek and this week have the same value? " + bool);

nextWeek.setDate(today.getDate() + 7);

console.log(formattedDate(nextWeek));
console.log(nextWeek);

bool = nextWeek.toDateString() === today.toDateString();
console.log("nextWeek and this week have the same value after adding 7 days? " + bool);


anotherTime = new Date(2013, 2, 1, 1, 10);
time = formatTime(anotherTime);
console.log(time);
