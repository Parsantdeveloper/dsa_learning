
  // three sum . 

  let nums = [1,0,-1,0,-2,2] 
  let target=0
  //       =[0,0,0,0,0,1,1,2]     [[0,0,0]]
  //         i   j k  
  // [-4,-1,-1,0,1,2]

  var threeSum = function(nums,target) {
    nums =nums.sort((a,b)=>a-b);
    let k = nums.length-1;
    let res =[];

    for( k;k>=2;k--){

    if (k < nums.length - 1 && nums[k] === nums[k + 1]) {
    continue; 
     }
      let sum=0;
      let i=0;
      let j=k-1;

      while(i<j){

      sum=nums[i]+nums[j]+nums[k];
       if(sum===target){

       res.push([nums[i],nums[j],nums[k]]);
        i++ ; j--;
        while(i<j && nums[i]===nums[i-1]) i++;
        while(i<j && nums[j]===nums[j+1])j--;
       }
       else if(sum>0){
        j--;
       }else{
        i++;
       }
      }
     
    }
    return res;
  };


console.log(threeSum(nums,target));