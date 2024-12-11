//Fun Fact: I've had Exes and Ohs stuck in my head since completing this challenge. 

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//My Solution: 
function XO(str) {
    let xCount = 0
    let oCount = 0
    
    for(let i=0;i<str.length;i++){
      const char = str[i].toLowerCase();
      if (char === 'x'){
        xCount++
      } else if (char === 'o'){
        oCount++
      }
    }
    return xCount === oCount
  }

//top solution: 
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

//2nd answer: 
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }