function askFirstDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Yes, I have got one"), 3000);
  });
}

function askSecondDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject("Sorry don't have any"), 1000);
  });
}

function askThirdDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Sure, I have one for you"), 2000);
  });
}

function failFirstDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject("No"), 2000);
  });
}

function failSecondDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject("No sorry"), 2000);
  });
}

function failThirdDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject("No."), 3000);
  });
}

// This returns the first successful promise and not just the first promise

Promise.any([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(
  (value) => {
    console.log(value);
  }
);

// This returns an aggregate of errors
Promise.any([failFirstDealer(), failSecondDealer(), failThirdDealer()])
  .then((value) => {
    console.log(value);
  })
  .catch((errors) => {
    console.log(errors.errors);
  });

// Empty array of promises
Promise.any([])
  .then((value) => {
    console.log(value);
  })
  .catch((errors) => {
    console.log(errors.errors);
  });

// Pass an array of non-promise values - will return the first value in the array
Promise.any([1, 2, 3])
  .then((value) => {
    console.log(value);
  })
  .catch((errors) => {
    console.log(errors.error);
  });
