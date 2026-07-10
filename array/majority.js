
let nums = [3,2,3]

var majorityElement = function(nums) {
    let hashMap = new Map();
    let n = nums.length/3;
    let res= new Set();
    for(let num of nums){
        hashMap.set(num,(hashMap.get(num)||0)+1);
        if(hashMap.get(num)>n){
            res.add(num);
        }
    }
    return [...res];
};

console.log(majorityElement(nums));