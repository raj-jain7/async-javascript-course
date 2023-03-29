// Await is used to wait for a promise
// Waits until the promise is settled. Does not matter if it is resolved or rejected
function getSpecificNumber() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(42), 4000);
  });
}

function getAnotherSpecificNumber() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(44), 0);
  });
}

// Option 1
async function f() {
  const anotherSpecificNumber = await getAnotherSpecificNumber();
  const specificNumber = await getSpecificNumber();
  console.log(specificNumber);
  console.log(anotherSpecificNumber);
}

f();
// Both values are loaded at the same time

// Option 2
// function func() {
//   getSpecificNumber().then((value) => {
//     console.log(value);
//   });
//   getAnotherSpecificNumber().then((value) => {
//     console.log(value);
//   });
// }
//
// func();
