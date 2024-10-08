// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

//My Solution
function oddOrEven(array) {
    let arrSum = 0
    for (i = 0;i<array.length;i++){
       arrSum += array[i]
     }
    
    if (arrSum%2 == 0 || arrSum == 0 || arrSum%-2 == 0){
      return 'even'
    }
    else {return 'odd'}
  }
  
//Top Answer (which makes so much more sense)

function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }

  