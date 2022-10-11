// Find the capitals

// write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


// SOLUTION

var capitals = function (word) {
    let capitalArr = []
    for(let i = 0; i < word.length; i++){
        if(word[i] == word[i].toUpperCase()){
            capitalArr.push(i)
        }
    }
    return capitalArr
   
};


// TEST

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
//   });
// });