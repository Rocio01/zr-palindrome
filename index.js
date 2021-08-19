 module.exports = Phrase;


String.prototype.reverse = function reverse(){
  return Array.from(this).reverse().join("");
}


function Phrase(content){
  this.content = content;
  this.processor = function processor(str){
     return str.toLowerCase();
  }
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
  
  this.palindrome = function palindrome(){
     return this.processedContent() === (this.processedContent()).reverse();
  }
 
}



 