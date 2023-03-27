function askFirstDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(8000), 3000);
  });
}

function askSecondDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject("Not suitable car"), 5000);
  });
}

function askThirdDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10000), 8000);
  });
}

// Example 1

Promise.allSettled([
  askFirstDealer(),
  askSecondDealer(),
  askThirdDealer(),
]).then((values) => {
  console.log(values);
});

// Example 2

Promise.allSettled([1, 2, 3]).then((values) => {
  console.log(values);
});

// Example  3
Promise.allSettled([]).then((values) => {
  console.log(values);
});
