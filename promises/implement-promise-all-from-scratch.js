function askFirstDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(8000), 3000);
  });
}

function askSecondDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(12000), 12000);
  });
}

function askThirdDealer() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(10000), 8000);
  });
}

function askThirdDealerFails() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject("No reason provided"), 1000);
  });
}

const promiseAll = function (arrayOfPromises) {
  if (arrayOfPromises.length === 0) {
    return Promise.resolve([]);
  }
  // Need to return an array of promise values in case all promises are resolved
  const promiseValues = [];

  let settledPromisesCount = 0;

  return new Promise((resolve, reject) => {
    arrayOfPromises.forEach((promise, index) => {
      if (promise instanceof Promise === false) {
        promise = Promise.resolve(promise);
      }
      promise
        .then((result) => {
          settledPromisesCount += 1;
          promiseValues[index] = result;
          if (settledPromisesCount === arrayOfPromises.length) {
            resolve(promiseValues);
          }
        })
        // If one promise fails, need to reject all of them
        .catch((reason) => {
          return reject(reason);
        });
    });
  });
};

// Example 1 - Working

// promiseAll([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(
//   (values) => {
//     console.log(values);
//   }
// );

// Example 2 - Not working

// promiseAll([askFirstDealer(), askSecondDealer(), askThirdDealerFails()])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

// Example 3

// promiseAll([]).then((values) => {
//   console.log(values);
// });

// Example 4
promiseAll([1, 2, 3, 4]).then((values) => {
  console.log(values);
});

// If one of the promises gets rejected, then the whole promise will get rejected as well
