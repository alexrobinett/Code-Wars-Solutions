// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// // // // // // // SOLUTION

function powersOfTwo(n){
    let solution = []
    if (n === 0){
      return [1]
    }else if(n > 0 ){
     for (let i = 0; i <= n; i++){
      solution.push(Math.pow(2,i))
    }
    return solution 
    }
  }

//  //   // // // TEST

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests", function(){
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(powersOfTwo(0), [1])
//     assert.deepEqual(powersOfTwo(1), [1, 2])
//     assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
//   })
// });