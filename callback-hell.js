function calculateSquare(number, callback) {
  setTimeout(function () {
    const result = number * number;
    callback(null, result);
  }, 3000);
}

// Move the invocation of the second function inside the callback of the first function
// Nested callbacks

calculateSquare(3, function (err, result) {
  console.log(result);
  calculateSquare(4, function (err, result) {
    console.log(result);
    calculateSquare(5, function (err, result) {
      console.log(result);
    });
  });
});
