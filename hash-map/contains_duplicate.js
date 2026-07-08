
 
 
 var containsDuplicate = function(nums) {
    
    let arr = new Set();
     for(let num of nums){
        if(arr.has(num)){
            return true
        }
        arr.add(num);
     }
    
  
  return false 

};

console.log(containsDuplicate([1,2,3,1]))