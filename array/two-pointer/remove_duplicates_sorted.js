
// 🟡 Question 3 — Remove Duplicates (Sorted Array)
// Input:
// [1,1,2,2,3,4,4]

// Output:
// [1,2,3,4]

// Rules:

// Must modify in-place
// Return new length

function removeDuplicates(arr){
    let i =0;
    let j =1;
    while(j<arr.length){
         if(arr[i]!=arr[j]){
           arr[++i]=arr[j]
         }
        j++
    }
    arr.length=++i;
    return arr ;
}
console.log(removeDuplicates([1,1,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4]))