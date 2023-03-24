function print1() {
  const number1 = 1;
  console.log(number1);
}

function print2() {
  function getNumber2() {
    return 2;
  }
  const number2 = getNumber2();
  console.log(number2);
}

// Using an anonymous function for a callback
function print3() {
  const fs = require("fs");
  fs.readFile("./number3.txt", "utf-8", function (err, number3) {
    console.log(number3);
    print4();
  });
}

// Using a non-anonymous function for a callback
// function callback(err, number3) {
//   console.log(number3);
//   print4();
// }

// function print3() {
//   const fs = require("fs");
//   fs.readFile("./number3.txt", "utf-8", callback);
// }

function print4() {
  const number4 = 4;
  console.log(number4);
}

print1();
print2();
print3();
// print4();

// A callback is a function passed as an argument when calling a function that will start executing a task in the background.
// When this background task is done running, it calls the callback function to let you know about the changes.

// Synchronous Callback example - 1

// let fruits = ["orange", "lemon", "banana"];
// fruits.forEach(function logFruit(fruit) {
//   console.log(fruit);
// });

// Synchronous Callback example - 2

// function callBackTech(callback, tech) {
//   console.log("Calling callBackTech");
//   if (callback) {
//     callback(tech);
//   }
//   console.log("Calling callBackTech finished!");
// }

// function logTechDetails(tech) {
//   if (tech) {
//     console.log("The technology used is: " + tech);
//   }
// }

// callBackTech(logTechDetails, "HTML5");

// Asynchronous Callback example - 3

// function callBackTech(callback, tech) {
//   console.log("Calling callBackTech!");
//   if (callback) {
//     setTimeout(() => callback(tech), 2000);
//   }
//   console.log("Calling callBackTech finished!");
// }

// function logTechDetails(tech) {
//   if (tech) {
//     console.log("The technology used is: " + tech);
//   }
// }

// callBackTech(logTechDetails, "HTML5");
