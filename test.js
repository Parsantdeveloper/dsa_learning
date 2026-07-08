


var majorityElement = function(nums) {
    let hashMap = new Map();
    let max =0;
    let res=0
    for(let num of nums){
     hashMap.set(num,(hashMap.get(num)||0)+1)
     if(hashMap.get(num)>max){
         max = hashMap.get(num);
         res=num;
     }
    }
    return res;
};

console.log(majorityElement([2,2,1,1,1,2,2]))