

var maxSlidingWindow = function(nums, k) {
    
    let result =[];
    let deque=[];

    for(let i =0;i<nums.length;i++){

        while(deque.length && nums[i]>nums[deque[deque.length-1]]){
            deque.pop();
        }
      deque.push(i);
        if(deque[0]<=i-k){
            deque.shift();
        }

        if(i>=k-1){
            result.push(nums[deque[0]]);
        }
    }
    return result ; 
};

let nums = [1,3,-1,-3,5,3,6,7]
let k = 3;

console.log(maxSlidingWindow(nums,k))