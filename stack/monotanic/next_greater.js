

var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();
    let stack = [];
    let result =[];

    for(let i=0;i<nums2.length;i++){
        while(stack.length && nums2[i]>nums2[stack[stack.length-1]]){
            let idx = stack.pop();
            map.set(nums2[idx],nums2[i])
        }
        stack.push(i)
    }

    for(let i =0;i<nums1.length;i++ ){
        result[i]=map.get(nums1[i])||-1;
    }
    return result;
};

let nums1 = [4,1,2];
let nums2 = [1,3,4,2];

console.log(nextGreaterElement(nums1,nums2));