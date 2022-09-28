// Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


// SOLUTION

function basicOp(oper, val1, val2){
 // figure out operation
 
 if(oper === "+"){
    return val1 + val2
 }else if (oper === "-"){
    return val1 - val2
 }else if (oper === "*"){
    return val1 * val2
 }else if (oper === "/"){
    return val1 / val2
 }
 
}




// TEST


describe("Tests", () => {
    it("test", () => {
  console.log("Basic tests\n");
  Test.assertSimilar(basicOp('+', 4, 7), 11);
  Test.assertSimilar(basicOp('-', 15, 18), -3);
  Test.assertSimilar(basicOp('*', 5, 5), 25);
  Test.assertSimilar(basicOp('/', 49, 7), 7);
    });
  });
  