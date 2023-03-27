function logToConsole(somePromise) {
  somePromise.then((value) => {
    console.log(value);
  });
}

const somePromise = new Promise(function (resolve, reject) {
  resolve("Hello");
});

logToConsole(somePromise);
const value = "string";

// Promise.resolve returns a promise object that is resolved with the given value
const resolvedPromise = Promise.resolve("hello");
logToConsole(resolvedPromise);
