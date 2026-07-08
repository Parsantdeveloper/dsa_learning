// 🟡 Problem 3 — Smallest Subarray With Given Sum
// Input:
// [2,1,5,2,3,2]
// S = 7

// Output:
// 2

// Explanation:

// [5,2] → length = 2

// This introduces:

// Expanding window
// Shrinking window


function smallestSubArray(arr,s){
    let length=Infinity;
    let sum = 0;
    let i=0;

    for(let j=0;j<arr.length;j++){
       sum+=arr[j];
       while(sum>=s){
        length=Math.min(length,j-i+1);
        sum-=arr[i];
        i++;
       }
    }
    return length===Infinity?0:length;

}

console.log(smallestSubArray([2,1,5,2,3,2], 7))  // Output: 2