let  nums = [3,0,1]

var missingNumber = function(nums) {
    let n = nums.length;
    let arr=new Array(n+1).fill(0)
    let missing=0 ;
    for(let i = 0;i<n;i++)
    {
      arr[nums[i]]=nums[i];
    }
    for(let i =0;i<n;i++){

      if(arr[i+1]!=arr[i]+1){
        missing=arr[i]+1
        break;
      }
    }
    return missing;
};

console.log(missingNumber(nums));