 module.exports = Phrase;


String.prototype.reverse = function reverse(){
  return Array.from(this).reverse().join("");
}

function Phrase(content){
  this.content = content;

  this.letters = function letters(){
  //  let theLetters = [];
   let lettersRegex = /[a-z]/gi;

    return (this.content.match(lettersRegex) || []).join("");

    //  functional programming

    // return Array.from(this.content).filter(c => c.match(lettersRegex)).join("");

    //  with a forEach loop

    // Array.from(this.content).forEach((character) => {
    //   if (character.match(lettersRegex)){
    //     theLetters.push(character);
    //   }
    // } )

    // with a for loop

    // for(let i = 0; i < this.content.length; i ++){
    //   let character = this.content.charAt(i);
    //   if (character.match(lettersRegex)){
    //     theLetters.push(character);
    //   }
    // }

    // return theLetters.join("");
  }

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  
  this.palindrome = function palindrome(){
     return this.processedContent() === (this.processedContent()).reverse();
  }
 
}



 