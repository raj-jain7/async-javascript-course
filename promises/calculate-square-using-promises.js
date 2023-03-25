function calculateSquare(number) {
  const myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof number !== "number") {
        reject(new Error("Argument of type number is expected"));
      }
      const result = number * number;
      resolve(result);
    }, 1000);
  });

  return myPromise;
}

// When it fails

calculateSquare("Random").then(
  function (value) {
    console.log(value);
  },
  (reason) => {
    console.log(reason.message);
  }
);

// When it passes
calculateSquare(2).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason.message);
  }
);
