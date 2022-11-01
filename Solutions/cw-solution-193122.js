// Ones and Zeros
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11


// // // // // // // SOLUTION

const binaryArrayToNumber = arr => {
    let arrayLength = arr.length -1
    let newArr = []
    if(arr === [,]){
    return arr
  }else
    for(let i = 0; i < arr.length; i++){
      if (arr[i] == 1){
        newArr[i] = (2 ** arrayLength) * 1;
        --arrayLength
      }else 
      --arrayLength
    }
    
    return newArr.reduce((a,b)=> a + b)
    
   
  };

//  //   // // // TEST

// const Test = require('@codewars/test-compat');

// describe("One's and Zero's", () => {

//   it("Example tests", () => {
//       Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
//       Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
//       Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
//       Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
//   });

// });