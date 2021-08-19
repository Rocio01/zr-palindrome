let assert = require("assert");
const internal = require("stream");
let Phrase = require("../index");

describe("Phrase", function(){
  describe("#palindrome", function(){
    it("should return false for a non-palindrome", function(){
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });
    it("should return true for a palindrome", function(){
      let plainPalindrome = new Phrase("reconocer");
      assert(plainPalindrome.palindrome());
    });
    it("should return true for a mixed case palindrome", function(){
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    })
    it("should return true for a mixed-case palindrome");
    it("should return true for a palindrome with punctuation");
  });
 

})