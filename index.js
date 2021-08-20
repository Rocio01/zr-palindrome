 module.exports = Phrase;


String.prototype.reverse = function reverse(){
  return Array.from(this).reverse().join("");
}


function Phrase(content){
  this.content = content;

  this.letters = function letters(){
   let theLetters = [];
    for(let i = 0; i < this.content.length; i ++){
      if (this.content.charAt(i).match(/[a-zA-Z]/gm)){
        theLetters.push(this.content.charAt(i));
      }
    }
    return theLetters.join("");
  }

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  
  this.palindrome = function palindrome(){
     return this.processedContent() === (this.processedContent()).reverse();
  }
 
}



 