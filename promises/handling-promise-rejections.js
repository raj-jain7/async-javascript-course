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

calculateSquare(1)
  .then((value) => {
    console.log(value);
    return calculateSquare(2);
  })
  .then(
    (value) => {
      throw new Error("some random error");

      //   console.log(value);
    },
    (reason) => {
      console.log("error happened: " + reason.message);
    }
  );
