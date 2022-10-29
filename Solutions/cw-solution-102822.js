// Mumbling

// his time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// // // // // // // SOLUTION

function accum(s) {
    let solution =""
    let arr = s.split('')
    for (let i = 0; i < s.length; i++){
      let multipliedLetters = ""
     for (let b = 0; b <= i; b++){
       if (b <= 0){
         multipliedLetters += arr[i].toUpperCase()
      }else multipliedLetters += arr[i].toLowerCase()
     }
      if(i < s.length - 1){
        solution += `${multipliedLetters}-`
       
      }else solution += `${multipliedLetters}`
       
    }
    return solution
  }


//  //   // // // TEST

// const Test = require('@codewars/test-compat');

// describe("accum",function() {
// it("Basic tests",function() {    
// 	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// 	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// 	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// 	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// 	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
// })})