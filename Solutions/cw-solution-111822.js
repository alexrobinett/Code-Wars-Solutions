// Task

// Given a string str, reverse it and omit all non-alphabetic characters.

// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output

// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// // // // // // // SOLUTION

function reverseLetter(str) {  
    let match = /[^a-z]+/gi
    return str.split("").reverse().join("").replace(match, "")
  }
  
//  //   // // // TEST

// const Test = require('@codewars/test-compat');

// describe("Basic Tests", function(){
// it("It should works for basic tests.", function(){

// Test.assertEquals(reverseLetter("krishan"),"nahsirk")

// Test.assertEquals(reverseLetter("ultr53o?n"),"nortlu")

// Test.assertEquals(reverseLetter("ab23c"),"cba")

// Test.assertEquals(reverseLetter("krish21an"),"nahsirk")

// })})