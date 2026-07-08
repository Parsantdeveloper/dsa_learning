
// 🟢 Question 1 — Reverse Array (Classic Two Pointer)

// Reverse array in-place

// Input:
// [1,2,3,4,5]

// Output:
// [5,4,3,2,1]

// Constraints:

// No extra array
// Use two pointers


function reverseArray(arr){
   let i=0;
   let j=arr.length-1;

   while(i<j){
     [arr[i],arr[j]]=[arr[j],arr[i]];
     i++ ;
     j--;
   }
   return arr;
}

 console.log(reverseArray([1,2,3,4,5,6,7]));