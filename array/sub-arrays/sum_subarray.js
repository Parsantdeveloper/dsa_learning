// 4. Subarray Sum (Very Important)

// Problem:

// Find sum of all subarrays.

// Example:

// [1,2,3]

// Subarrays:

// [1] = 1
// [1,2] = 3
// [1,2,3] = 6
// [2] = 2
// [2,3] = 5
// [3] = 3


function sumOfAllSubarrays(arr){
    let sum = 0;
    for(let i =0;i<arr.length;i++){

        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
             console.log(arr.slice(i,j+1)+' = '+sum);
        }
    }
}
sumOfAllSubarrays([1,2,3,4,5])
