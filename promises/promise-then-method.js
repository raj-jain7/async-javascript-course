const myPromise = new Promise(function (resolve, reject) {
  resolve("Hello World");
});

// promise status and promise value are internal properties of the promise

function fulfilled(value) {
  console.log(value);
}

myPromise.then(fulfilled);
console.log("Start the application");
