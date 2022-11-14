// 7 kyu
// Factorial
// Your task is to write function factorial.
// https://en.wikipedia.org/wiki/Factorial

// // // // // // // SOLUTION

function factorial(n){
    let arr = []
      for(let i = 1; i <= n; i++){
      arr[i-1] = i
    }
   return arr.reduce((a,b)=> a * b ,1)
  }

//  //   // // // TEST

// describe("Basic tests",() =>{
//     Test.assertEquals(factorial(0), 1);
//     Test.assertEquals(factorial(1), 1);
//     Test.assertEquals(factorial(4), 24);
//     Test.assertEquals(factorial(7), 5040);
//     Test.assertEquals(factorial(17), 355687428096000);
//     })