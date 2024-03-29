// How old will I be in 2099?
// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!
// SOLUTION

function  calculateAge(yob,year) {
    if (yob - year === 1 && yob > year){
      return `You will be born in ${yob - year} year.`
    }else if (year - yob === 1 && year > yob){
      return `You are ${year - yob} year old.`
    }else if (yob > year){
      return `You will be born in ${yob - year} years.`
    }else if (year === yob){
      return 'You were born this very year!'
    }else if (yob < year){
      return `You are ${year - yob} years old.`
    }
  }
  
  

// TEST

// const { assert } = require('chai');

// describe("Random test cases", function() {
//     Test.assertEquals(calculateAge(2012, 2016),"You are 4 years old.");
//     Test.assertEquals(calculateAge(1989, 2016),"You are 27 years old.");
//     Test.assertEquals(calculateAge(2000, 2090),"You are 90 years old.");
//     Test.assertEquals(calculateAge(2000, 1990),"You will be born in 10 years.");
//     Test.assertEquals(calculateAge(3400, 3400),"You were born this very year!"); 
//     Test.assertEquals(calculateAge(900, 2900),"You are 2000 years old.");
//     Test.assertEquals(calculateAge(2010, 1990),"You will be born in 20 years.");
//     Test.assertEquals(calculateAge(2010, 1500),"You will be born in 510 years.");
//     Test.assertEquals(calculateAge(2011, 2012),"You are 1 year old.");
//     Test.assertEquals(calculateAge(2000, 1999),"You will be born in 1 year.");
//     })