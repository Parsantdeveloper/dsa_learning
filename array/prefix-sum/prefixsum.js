// function prefixSum(arr){
//     let prefix = [];
//     let sum = 0;

//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//         prefix.push(sum);
//     }

//     return prefix;
// }

// function rangeSum(prefix,left,right){
//     if(left === 0) return prefix[right];
//     return prefix[right] - prefix[left-1];
// }

 function prefixSum(arr){
    let prefixArray=[...arr];
    let sum =0;

    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        prefixArray[i]=sum;
    }
   return prefixArray;
 }

 function rangeSum(prefix,l,r){
    let arr = prefixSum(prefix);
    return arr[r-1]-arr[l-1]
 }

let arr = [2,4,6,8,10];
let prefix = prefixSum(arr);

console.log(rangeSum(prefix,1,3)); // 18


 