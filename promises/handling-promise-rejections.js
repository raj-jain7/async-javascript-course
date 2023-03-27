function calculateSquare(number) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof number !== "number") {
        return reject(new Error("Argument of type number is expected"));
      }
      const result = number * number;
      resolve(result);
    }, 1000);
  });
  return promise;
}

// Example 1

// calculateSquare(1)
//   .then((value) => {
//     console.log(value);
//     return calculateSquare(2);
//   })
//   .then(
//     (value) => {
//       throw new Error("some random error");
//     },
//     (reason) => {
//       console.log("error happened: " + reason.message);
//     }
//   )
//   .catch((reason) => {
//     console.log(reason.message);
//   });

// Example 2

calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare(2);
  })
  .then(() => {
    return new Promise(function (resolve, reject) {
      reject(new Error("Something went wrong"));
    });
  })
  .catch((reason) => {
    console.log("Error happened: " + reason.message);
  });
