

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
// [1,2,3,4]
// [1,1,2,6] left 
// [24,12, 4,1] right

  //  [-1,1,0,-3,3]
  //  [ 1,-1,-1,0,0]
  //  [ 0,0,-9,3,1]
  //  [ 0,0,9,0,0]

var productExceptSelf = function(nums) {
    let leftPrefix =[1];
    let rightPrefix=new Array(nums.length).fill(1)
    console.log(rightPrefix)
    let answer=[];
    for(let i =0;i<nums.length-1;i++){
      leftPrefix[i+1]=leftPrefix[i]*nums[i]
    }
    for(let i =nums.length-1;i>0;i--){
      rightPrefix[i-1]=rightPrefix[i]*nums[i]
    }
    for(let i =0;i<nums.length;i++){
      answer[i]=leftPrefix[i]*rightPrefix[i];
    } 
    return answer;
};

console.log(productExceptSelf([-1,1,0,-3,3]))

