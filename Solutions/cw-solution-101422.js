// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// SOLUTION
function stringToArray(string){

    let arr = string.split(" ")
    return arr

    }

    
    

    
    // TEST
//     const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
//     assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
//   });
// });

