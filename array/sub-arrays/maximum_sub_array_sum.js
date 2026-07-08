// 5. Most Important Subarray Problems

// These appear very frequently:

// 1. Maximum Subarray Sum (Kadane's Algorithm)

// Example:

// [-2,1,-3,4,-1,2,1,-5,4]

// Answer:

// [4,-1,2,1] = 6


 function MaximumSumOfSubarray(arr){
   let sum = 0;
   let max_sum = -Infinity;
    for(let i =0;i<arr.length;i++){
       sum+=arr[i] 
        max_sum=Math.max(max_sum,sum)
       if(sum<0){
        sum =0;
       }
    }
    return max_sum;
 }

 console.log(MaximumSumOfSubarray([-2,1,-3,4,-1,2,1,-5,4]))