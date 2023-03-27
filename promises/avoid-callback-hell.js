function calculateSquare(number) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof number !== "number") {
        return reject(new Error("Argument of type number is expected"));
      }
      const result = number * number;
      resolve(result);
    }, 3000);
  });
  return promise;
}

calculateSquare(1)
  .then((result) => {
    console.log(result);
    return calculateSquare(2);
  })
  .then((result) => {
    console.log(result);
    return calculateSquare(3);
  })
  .then((result) => {
    console.log(result);
    return calculateSquare("random");
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
