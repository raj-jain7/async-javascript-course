function askFirstDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(8000), 3000);
  });
}

function askSecondDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error("Not suitable car")), 12000);
  });
}

function askThirdDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10000), 8000);
  });
}

// The promises aren't returned because the second promise fails. So all of the promises fail

// Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
//   .then((prices) => {
//     console.log(prices);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// Promise.all([
//   askFirstDealer().catch((error) => {
//     return error;
//   }),
//   askSecondDealer().catch((error) => {
//     console.log(error.message);
//     return error.message;
//   }),
//   askThirdDealer().catch((error) => {
//     return error;
//   }),
// ]).then((prices) => {
//   console.log(prices);
// });

// If you pass a promise that rejects immediately, then promise.all will be rejected immediately
Promise.all([
  askFirstDealer().catch((error) => {
    return error;
  }),
  askSecondDealer().catch((error) => {
    return error;
  }),
  askThirdDealer().catch((error) => {
    return error;
  }),
  Promise.reject("Rejected for some reason"),
])
  .then((prices) => {
    console.log(prices);
  })
  .catch((error) => {
    console.log(error);
  });
