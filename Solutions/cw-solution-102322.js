// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.



// // // // // SOLUTION


function high(x){
    //coonvert to an array
    let wordArr = x.split(" ")
    //check each string in the array for highest point value
    function checkword(word){
      let wordScore = 0
      for(let i = 0; i < word.length; i++){
       wordScore += word.charCodeAt(i) - 96
      }
      return wordScore
    }
    let scoredArr = wordArr.map(checkword)
    
    let max = Math.max(...scoredArr)
    
    return wordArr[scoredArr.indexOf(max)]
  }
     
//  //   // // // TEST
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
//     assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
//     assert.strictEqual(high('take me to semynak'), 'semynak');   
//     assert.strictEqual(high('aa b'), 'aa');
//     assert.strictEqual(high('b aa'), 'b');
//     assert.strictEqual(high('bb d'), 'bb');
//     assert.strictEqual(high('d bb'), 'd');
//     assert.strictEqual(high('aaa b'), 'aaa');
//   })
// });