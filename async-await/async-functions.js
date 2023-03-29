// Async functions always return a promise.
// If such a value is not a promise then JavaScript would wrap it in a promise

// Javascript will automatically create a promise around that value
// The promise will be resolved with that value
async function f() {
  return "Hello World";
}
f().then((value) => {
  console.log(value);
});

async function newFunc() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Hi");
    }, 1000);
  });
}

newFunc().then((value) => {
  console.log(value);
});
