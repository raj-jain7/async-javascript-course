function logToConsole(somePromise) {
  somePromise.then((value) => {
    console.log(value);
  });
}
