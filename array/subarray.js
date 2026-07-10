

var subarraySum = function(nums, k) {
      let count =0;
      let i =0
       while(i<nums.length){
         if(nums[i]+nums[i+1]===k){
            count+=2;
            i+=2
         }else if (nums[i]===k){
            count++;
         }
         i++;
       }
      return count ;
};
let nums = [-1,-1,1]
let k =1 ;

console.log(subarraySum(nums,k))