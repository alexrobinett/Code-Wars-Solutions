// Multiple of index

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1)

// ome cases:

// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85

// // // // // // // SOLUTION

function multipleOfIndex(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++){
      if (array[i] % i === 0){
        newArr.push(array[i])
      }
    }
    return newArr
  }
//  //   // // // TEST

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests",() => {
//   it("Test", () => {
//     assert.deepEqual(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
//     assert.deepEqual(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
//     assert.deepEqual(multipleOfIndex([11, -11]), [-11]);
//     assert.deepEqual(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]), [-85, 72, 0, 68]);
//     assert.deepEqual(multipleOfIndex([28,38,-44,-99,-13,-54,77,-51]), [38, -44, -99]);
//     assert.deepEqual(multipleOfIndex([-1,-49,-1,67,8,-60,39,35]), [-49, 8, -60, 35]);
//   })
// });