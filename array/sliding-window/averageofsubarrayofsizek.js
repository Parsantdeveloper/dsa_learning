// 🟡 Problem 2 — Average of Subarray of Size K

// Input:

// [1,3,2,6,-1,4,1,8,2]
// k = 5

// Output:

// [2.2, 2.8, 2.4, 3.6, 2.8]

// Try implementing this now.

function AverageOfSubarray(arr,k){
   let windowSum=0;
   let Average=[];

   for(let i=0;i<arr.length;i++){
      windowSum+=arr[i];
      if(i>=k-1){
         Average.push(windowSum/k)
         windowSum-=arr[i-(k-1)]
       
      }
   }
   return Average;
}

console.log(AverageOfSubarray([1,3,2,6,-1,4,1,8,2],5))