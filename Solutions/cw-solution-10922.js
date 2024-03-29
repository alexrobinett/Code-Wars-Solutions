// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// SOLUTION 
function getCount(str) {
    var vowelsCount = 0;
    const vowels = [ 'a' , 'e' , 'i' , 'o' , 'u']
    for (let char of str){
      if (vowels.includes(char)){
        vowelsCount++
      }
    }
    return vowelsCount;
  }

// TEST

// const {assert} = require("chai");

// describe("Vowels Count Tests",function(){
//   it("should return 5 for 'abracadabra'",function(){
//     assert.strictEqual(getCount("abracadabra"), 5) ;
//   });
// });