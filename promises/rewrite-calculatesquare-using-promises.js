function calculateSquare(number) {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof number !== "number") {
        reject(new Error("Argument of type number is required"));
      }
      const result = number ** 2;
      return resolve(result);
    }, 1000);
  });
  return myPromise;
}

// passes

calculateSquare(2).then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error.message);
  }
);

// fails

calculateSquare("Random").then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error.message);
  }
);
