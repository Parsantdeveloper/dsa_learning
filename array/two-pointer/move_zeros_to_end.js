// 🟡 Question 4 — Move Zeros to End
// Input:
// [0,1,0,3,12]

// Output:
// [1,3,12,0,0]

// Rules:

// Maintain order
// Do in-place


 function moveZerosToEnd(arr){
   let i =0;
   let j =0;
 
     while(j<arr.length){
        if(arr[j]!=0){
            [arr[i],arr[j]]=[arr[j],arr[i]]
            i++
        }
        j++
      
     }
    return arr;
 }

 console.log(moveZerosToEnd([0,1,0,3,12]))