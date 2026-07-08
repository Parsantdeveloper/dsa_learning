 
 let nums = [5,2,3,1];

 // ascending order.
 var sortArray = function(nums) {
    let n = nums.length-1
    
     for(let i=n;i>0;i--){

        let isSwap=false;

        for(let j=0; j<i; j++ ){

            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]];
                isSwap=true;
            }

           }
            if(!isSwap){
                break;
            }
     }

     return nums;
    
};

 console.log(sortArray(nums));