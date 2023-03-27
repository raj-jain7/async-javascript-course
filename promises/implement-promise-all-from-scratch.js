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

const promiseAll = function (arrayOfPromises) {
  if (arrayOfPromises.length === 0) {
    return Promise.resolve([]);
  }
  // Need to return an array of promise values in case all promises are resolved
  const promiseValues = [];

  let settledPromisesCount = 0;

  return new Promise((resolve, reject) => {
    arrayOfPromises.forEach((promise, index) => {
      promise.then((result) => {
        settledPromisesCount += 1;
        promiseValues[index] = result;
        if (settledPromisesCount === arrayOfPromises.length) {
          resolve(promiseValues);
        }
      });
    });
  });
};

promiseAll([askFirstDealer(), askSecondDealer(), askThirdDealer()]).then(
  (values) => {
    console.log(values);
  }
);
