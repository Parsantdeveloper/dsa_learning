
var findMaxAverage = function(nums, k) {
    let left = 0 ;
    let sum = 0 ;
    let res = -Infinity ;

    for(let i = 0 ; i<nums.length;i++){
        sum+=nums[i];
        if(i-left>=k-1){
         res=Math.max(sum ,res) ;
         sum = sum-nums[left]
         left ++ 
        }
    }
    return res/k ;
};

console.log(findMaxAverage([-1],1));