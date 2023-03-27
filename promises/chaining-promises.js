function calculateSquare(number) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof number !== "number") {
        reject(new Error("Argument of type number is expected"));
      }
      const result = number ** 2;
      resolve(result);
    }, 2000);
  });
  return promise;
}

// Example 1

// calculateSquare(1)
//   .then((result) => {
//     console.log(result);
//     return 25;
//   })
//   .then((result) => {
//     console.log(result);
//   });

// Example 2

// calculateSquare(25)
//   .then((value) => {
//     console.log(value);
//     if (value !== 25) {
//       throw new Error("error");
//     }
//   })
//   .then(
//     (value2) => {
//       console.log(value2);
//     },
//     (reason) => {
//       console.log("error happened: " + reason);
//     }
//   );

// Example 3

// calculateSquare(1)
//   .then((result) => {
//     console.log(result);
//     return calculateSquare(2);
//   })
//   .then((result2) => {
//     console.log(result2);
//   });

// Example 4

// calculateSquare(1)
//   .then((result) => {
//     console.log(result);
//     return calculateSquare("random");
//   })
//   .then((result2) => {
//     console.log(result2);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// Example 5

calculateSquare("random")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
    return calculateSquare(25);
  })
  .then((result2) => {
    console.log(result2);
  })
  .catch((error) => {
    console.log(error.message);
  });
