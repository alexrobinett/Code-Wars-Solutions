// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples

// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"


// SOLUTION
function remove (string) {
    let arr = string.split('')
    
    if(arr[arr.length - 1] === "!"){
        let ans = arr.slice(0, -1);
         return ans.join('')
    }else return string
  
  }





// TEST

// const strictEqual = require("chai").assert.strictEqual;

// function doTest(input, expected) {
// 	const actual = remove(input);
// 	strictEqual(actual, expected, `for string:\n"${input}"\n`);
// }

// describe("Tests suite", function () {
// 	it("sample tests", function () {
// 		doTest("Hi!", "Hi");
// 		doTest("Hi!!!", "Hi!!");
// 		doTest("!Hi", "!Hi");
// 		doTest("!Hi!", "!Hi");
// 		doTest("Hi! Hi!", "Hi! Hi");
// 		doTest("Hi", "Hi");
// 	});
// });