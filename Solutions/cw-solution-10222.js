// Super Duper Easy

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// SOLUTION

function problem(x){
// check datatype is string or number
    if (typeof x === 'string'){
      return "Error"
// if not a string return x * 50 number
    }else {
      return x * 50 + 6
    }
  }

// TEST

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(problem("hello"), "Error");
    assert.strictEqual(problem(1), 56);
    assert.strictEqual(problem(5), 256);
    assert.strictEqual(problem(0), 6);
    assert.strictEqual(problem(1.2), 66);
    assert.strictEqual(problem(3), 156);
    assert.strictEqual(problem("RyanIsCool"), "Error");
    assert.strictEqual(problem(-3), -144);
    assert.strictEqual(problem(""), "Error");
    assert.strictEqual(problem(0.03), 7.5);
  })
})
