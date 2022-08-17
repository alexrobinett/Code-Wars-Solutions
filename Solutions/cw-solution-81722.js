// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// // // SOLUTION

function isDivideBy(number, a, b) {
    if( number % a === 0 && number % b === 0){
      return true
    }else return false
  }
// TEST

// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for basic tests", () => {
//     assert.strictEqual(boolToWord(true), 'Yes')
//     assert.strictEqual(boolToWord(false), 'No')
//     });
//   });