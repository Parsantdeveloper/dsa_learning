

var containsNearbyDuplicate = function(nums, k) {
    
    let i =0;
    let j=0;
    let map = new Map();
    while(j<nums.length){     
       let sub =j-i
             if(map.has(nums[j])){
            return true ; 
             }
           
       map.set(nums[j],1)

         if(sub>=k){
            map.delete(nums[i]);
        i++;
         }
            j++

}
return false;
}

let nums = [1,0,1,1]
let k = 1

console.log(containsNearbyDuplicate(nums,k))