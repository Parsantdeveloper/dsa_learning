
var removeDuplicates = function(nums) {
      let i =0;
      let j =1;
      while(j<nums.length){
        if(nums[i]!=nums[j]){
          nums[++i]=nums[j]
        }
        j++;
      }
      nums.length=i+1
      return nums.length;
};
let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))