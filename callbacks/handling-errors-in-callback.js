// function calculateSquare(number, callback) {
//   setTimeout(function () {
//     const result = number * number;
//     console.log(callback(result));
//   }, 1000);
// }

// const callback = function (result) {
//   return result;
// };

// calculateSquare(3, callback);

// We can not use try-catch block when dealing with Asynchronous Callbacks
function calculateSquare(number, callback) {
  // Asynchronous callback
  setTimeout(function () {
    if (typeof number !== "number") {
      callback(new Error("Enter a number please"));
      return;
    }
    const result = number ** number;
    callback(result);
  }, 3000);
  // Synchronous callback
  //   if (typeof number !== "number") {
  //     callback(new Error("Enter a number please"));
  //     return;
  //   }
  //   const result = number * number;
  //   callback(null, result);
}

const callback = function (err, result) {
  if (err !== null) {
    console.log("Caught Error: " + String(err));
    return;
  }
  console.log(result);
};

calculateSquare("Number", callback);
