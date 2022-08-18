function doubler(number, caller) {
  console.log(`This function was called by ${caller}.`);
  return number + number;
}

doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

function makeDoubler(caller) {
  return function(number) {
    return doubler(number, caller);
  };
}

let victorDoubler = makeDoubler('VictorCrum');
let newNum = victorDoubler(7);
console.log(`newNum ${newNum}`);


/// ------------------------------------review

function download(locationOfFile, errorHandler) {
  // try to download the file
  if (gotError) {
    errorHandler(reasonCode);
  }
}

function errorDetected(url, reason) {
  // handle the error
}

download("https://example.com/foo.txt", /* ??? */);

function createErrorHandler(url) {
  return function(reason) {
    return errorDetected(url, reason);
  };
}
