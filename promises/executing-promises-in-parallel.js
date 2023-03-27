function askFirstDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(8000), 3000);
  });
}

function askSecondDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(12000), 5000);
  });
}

function askThirdDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10000), 8000);
  });
}

// Execute promises in parallel and get an array with 3 prices in the browser console

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(
  (prices) => {
    console.log(prices);
  }
);

// Promise.all takes an array or any other iterable as an argument and returns a single promise
// This promise becomes resolved either when all of the promises in the array become resolved
// or if the array contains no promises

Promise.all([1, 2, 3]).then((prices) => {
  console.log(prices);
});

// Passing an empty array
Promise.all([]).then((value) => {
  console.log(value);
});
