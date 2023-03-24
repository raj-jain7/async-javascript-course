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

describe("calculateSquare", function () {
  it("should return 4 if passed 2", function () {
    calculateSquare(2, function (err, result) {
      console.log("callback invoked");
      expect(result).to.equal(3);
    });
  });
});
