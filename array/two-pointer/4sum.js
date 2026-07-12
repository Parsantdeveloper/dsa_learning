
  // three sum . 

  let nums = [2,2,2,2,2]
 
  
  //         [-2,-1,0,0,1,2]
  let target=8
  //       =[0,0,0,0,0,1,1,2]     [[0,0,0]]
  //         i   j k  
  // [-4,-1,-1,0,1,2]

  var fourSum = function(nums,target) {
      nums=nums.sort((a,b)=>a-b);
     let l = nums.length-1;
     let res = [];
      for(l;l>=3;l--){
         if (l < nums.length - 1 && nums[l] === nums[l + 1]) {
           continue; 
            }
         let k = l-1

        for(k;k>=2;k--){
            if (k < l-1 && nums[k] === nums[k+1]) {
             continue; 
            }
            let sum =0;
            let i =0;
            let j = k-1;

            while(i<j){
                sum = nums[i]+nums[j]+nums[k]+nums[l];
                if(sum===target){
                  res.push([nums[i],nums[j],nums[k],nums[l]]);
                  i++;
                  j--;
                  while(i<j&& nums[i]===nums[i-1])i++;
                  while(i<j && nums[j]===nums[j+1])j--;
                }else if(sum>target){
                    j--
                }else{
                    i++
                }
            }
        }
      }
      return res;
  }

console.log(fourSum(nums,target));