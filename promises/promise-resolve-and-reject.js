function logToConsole(somePromise) {
  somePromise.then((value) => {
    console.log(value);
  });
}

const somePromise = new Promise(function (resolve, reject) {
  resolve("Hello");
});

logToConsole(somePromise);
