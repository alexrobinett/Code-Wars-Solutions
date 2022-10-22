// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]




// // // // // SOLUTION

// P: Getting a number as N
// R: returning a reversed array from the orginal number
// E: number 1234 should return [4,3,2,1]
// P: 1. convert number to string 2. convert string to a array 3. 4 reverse array with reverse method. 5. convert all array elements to numbers 6. Return the array

function digitize(n) {
   let newArr = n.toString().split('').reverse()
   return newArr.map(strArr => {return Number(strArr)})
  }

    
//   // // // TEST
//   const chai = require("chai");
//   const assert = chai.assert;
//   chai.config.truncateThreshold=0;
  
//   describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.deepEqual(digitize(35231),[1,3,2,5,3]);
//       assert.deepEqual(digitize(0),[0]);
//     });
//   });
  