// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//My solution: 
function sumTwoSmallestNumbers(numbers) {  
    let sortedArr = numbers.sort((a, b) => a - b);
    let sum = 0
    for(i=0;i<2;i++){
      sum += sortedArr[i]
    }
    return sum
}

//Top Solution: 
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
  };


//Favorite Answer: 
function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
  }