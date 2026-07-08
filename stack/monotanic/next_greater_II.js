

var nextGreaterElements = function(nums) {
    let n = nums.length;
    let stack = [];
    let result = new Array(n).fill(-1);

    for (let i = 0; i < 2 * n; i++) {
        let curr = nums[i % n];

        while (stack.length && curr > nums[stack[stack.length - 1]]) {
            let idx = stack.pop();
            result[idx] = curr;
        }

        if (i < n) {
            stack.push(i);
        }
    }

    return result;
};

console.log(nextGreaterElements([1,2,3,4,3]))