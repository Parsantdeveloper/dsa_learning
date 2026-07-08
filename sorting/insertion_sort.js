 
 let nums = [5,1,1,2,0,0];

 // ascending order.
 var sortArray = function(nums) {
    let n = nums.length
    
    for(let i =1 ;i<n;i++){
        
       let j =i;
         while(j>0 && nums[j]<nums[j-1]){

      [nums[j],nums[j-1]]=[nums[j-1],nums[j]];
            j--
        }

    }
    return nums;
};

 console.log(sortArray(nums));