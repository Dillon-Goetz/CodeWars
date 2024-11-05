// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

function twoSum(arr,sum){
    //array for pairs
    const pairs = []
    //hashmap obj
    const seenNums = {}
    //loop
for (const num1 of arr){
    const diff = sum - currentNum
    if(seenNums[diff]){
        pairs.push([currentNum, diff])
    }else{
        seenNums[currentNum] = true
    }
}
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])