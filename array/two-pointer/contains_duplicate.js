
 let arr = [3,3] ;
  
 
 
 var containsDuplicate = function(nums) {
    nums=nums.sort((a,b)=>a-b)
     let i = 0 ; 
     let j = 1 ; 
 
  while(j<nums.length){
    if(nums[i]===nums[j]){
        return true;
    }else if(i!=j){
        j++ ;
        i++ ;
    }
    
  }
  return false 

};

console.log(containsDuplicate(arr))