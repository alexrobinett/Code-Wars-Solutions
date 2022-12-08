// nput: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level



// SOLUTION

function printArray(array){
    return array.join(",")
   }
  

// TEST

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// var data = [2,4,5,2];
// Test.expect( printArray( data ) ==
//   "2,4,5,2", "int test failed" )
//   });
// });
