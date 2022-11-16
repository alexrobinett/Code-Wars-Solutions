// Predict your age!

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

// // // // // // // SOLUTION

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = []
    arr.push(age1 * age1,age2 * age2,age3 * age3,age4 * age4,age5 * age5,age6 * age6 ,age7 * age7,age8 * age8)
    return Math.floor(Math.sqrt(arr.reduce((a,b)=> a + b, 1))/2)
    
  }
//  //   // // // TEST

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(predictAge(65,60,75,55,60,63,64,45), 86);    
//   });
// })
