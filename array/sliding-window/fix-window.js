// 🟢 Problem 1 — Fixed Window (Start Here)
// Maximum Sum of Subarray of Size k
// Input:
// arr = [2,1,5,1,3,2]
// k = 3

// Output:
// 9

// Explanation:
// [2,1,5] = 8
// [1,5,1] = 7
// [5,1,3] = 9  ← max
// [1,3,2] = 6


//  function MaximumSumOfSubArray(arr,k){
//     let windowSum=0;
//     let maxSum=-Infinity;
//     for(let i =0;i<arr.length;i++){
//         windowSum+=arr[i];
//         if(i>=k-1){
//         maxSum=Math.max(maxSum,windowSum);
//          windowSum -= arr[i-(k-1)]

//          }
//     }
//     return maxSum;
//  }

   function MaximumSumOfSubArray(arr,k){
      let maxSum = 0 ;
      let windowSum=0;
      for (let i = 0 ; i <arr.length;i++){  2
          windowSum+=arr[i];
         if(i>=k-1){
            maxSum=Math.max(maxSum,windowSum);
            windowSum -= arr[i-2]
         }
      }
      return maxSum;
       
   }

 console.log(MaximumSumOfSubArray([2,1,5,1,3,2],3))