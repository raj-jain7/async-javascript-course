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

// This returns the first successful promise and not just the first promise

Promise.any([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(
  (value) => {
    console.log(value);
  }
);
