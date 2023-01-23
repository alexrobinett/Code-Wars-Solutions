// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.



// SOLUTION

function pickIt(arr){
    var odd=[],even=[];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0) {
        even.push(arr[i])
      } else odd.push(arr[i])
    }
    
    
    return [odd,even];
  }

// TEST

// describe("Tests", () => {
//     it("test", () => {
//       Test.assertSimilar(pickIt([1,2]),[[1],[2]]);
//       Test.assertSimilar(pickIt([1,2,3]),[[1,3],[2]]);
//       Test.assertSimilar(pickIt([3,2,1]),[[3,1],[2]]);
//       Test.assertSimilar(pickIt([10,20,30]),[[],[10,20,30]]);
//       Test.assertSimilar(pickIt([11,21,31]),[[11,21,31],[]]);
//       Test.assertSimilar(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);
//     });
//   });