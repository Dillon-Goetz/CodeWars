// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//My solution: 
function smash (words) {
    let sentence = ''
    for (let i = 0; i<words.length; i++){
       sentence = sentence.concat(words[i],' ')
     }
    
    return sentence.trim()
  };
  
  words = ['hello', 'world', 'this', 'is', 'great']

//Top Solution (work smarter not harder am I right?): 
smash = function (words) {
    return words.join(" ");
  };