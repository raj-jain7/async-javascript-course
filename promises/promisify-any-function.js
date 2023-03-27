// function capitalize(text) {
//   return text[0].toUpperCase() + text.substr(1);
// }

// console.log(capitalize("hi"));

function capitalize(text) {
  return new Promise(function (resolve, reject) {
    if (typeof text !== "string") {
      reject(new Error("Argument of type string is expected"));
    }
    const result = text[0].toUpperCase() + text.substr(1);
    resolve(result);
  });
}

capitalize("Random").then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error.message);
  }
);
