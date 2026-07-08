
// var rotate = function (nums, k) {



//     for (let i = 0; i < k; i++) {
//         let i = nums.length - 2;
//         let j = nums.length - 1;
//         while (i >= 0) {
//             [nums[i], nums[j]] = [nums[j], nums[i]]
//             i--;
//             j--;
//         }
//     }




//     return nums;
// }


 var rotate = function(nums, k) {

    k = k % nums.length;

    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }

    i = 0;
    j = k - 1;

    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }

    i = k;
    j = nums.length - 1;

    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }

    return nums;
}

let nums = [-2];
let k = 2;

console.log(rotate(nums, k));


   

