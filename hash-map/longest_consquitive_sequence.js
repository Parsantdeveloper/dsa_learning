

// var longestConsecutive = function(nums) {
//     let set = new Set(nums);
//    let maxSum = 0 ;
//    for(let num of set){
//         let current =num;
//         if(!set.has(num-1)){
//         let currentSum =1;

//          while(set.has(current+1)){
//             currentSum ++ ;
//             current ++ ;
//         }
//         maxSum=Math.max(currentSum,maxSum);
//         }
        
//     }
//     return maxSum
    
// };

// console.log(longestConsecutive([100,4,200,1,3,2]))


var sumOfThree = function(num) {
    let mid = Math.floor(num/3);
     if(mid-1+mid+mid+1 === num )  return [mid-1 , mid , mid+1];
     return []
  
};

console.log(sumOfThree(4))