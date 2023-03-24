function calculateSquare(number, callback) {
  setTimeout(function () {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number is expected"));
      return;
    }
    const result = number * number;
    callback(null, result);
  }, 3000);
}

module.exports = calculateSquare;
