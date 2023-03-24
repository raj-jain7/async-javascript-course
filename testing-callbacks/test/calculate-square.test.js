const calculateSquare = require("../calculate-square.js");
const expect = require("chai").expect;

// This test passes because we are testing our async function as if it were synchronous. Our test passes very quickly
// It does not wait even one second. It marks are tests as passing before the callback is even invoked

// describe("calculateSquare", function () {
//   it("should return 4 if passed 2", function () {
//     calculateSquare(2, function (err, result) {
//       console.log("callback invoked");
//       expect(result).to.equal(3);
//     });
//   });
// });

// Need to tell Mocha that we are testing an asynchronous function. For this, we pass an additional argument to the function that contains are tests
// This argument is named done and is usually a function. We call this function when our test is finished
// In this case, we need to call the done function inside the callback that we passed to calculate square right after all expectations are checked

describe("calculateSquare", function () {
  it("should return 4 if passed 2", function (done) {
    calculateSquare(2, function (err, result) {
      console.log("callback invoked");
      expect(result).to.equal(4);
      done();
    });
  });

  it("should return an error if a number is not passed", function (done) {
    calculateSquare("stuff", function (err, result) {
      console.log("callback invoked");
      expect(err).to.be.instanceOf(Error);
      expect(err.message).to.be.equal("Argument of type number is expected");
      expect(err).to.not.equal(null);
      done();
    });
  });
});
