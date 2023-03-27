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

function askAtTheShop() {
  return Promise.resolve("We always have one. You can buy it for $10");
}

// Example 1
// Promise.race([askFirstDealer(), askSecondDealer(), askThirdDealer()])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });

// Promise all returns a promise that becomes resolved or rejected as soon as
// one of the promises becomes resolved or rejected

// Example 2
Promise.race([
  askFirstDealer(),
  askSecondDealer(),
  askThirdDealer(),
  askAtTheShop(),
]).then((value) => {
  console.log(value);
});
