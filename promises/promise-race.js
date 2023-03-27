function askFirstDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Yes, I have got one"), 3000);
  });
}

function askSecondDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject("Sorry don't have any"), 5000);
  });
}

function askThirdDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Sure, I have one for you"), 2000);
  });
}
