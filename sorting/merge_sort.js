function merge(left, right) {

    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}


function mergeSort(nums) {

    if (nums.length <= 1) {
        return nums;
    }

    const mid = Math.floor(nums.length / 2);

    const left = nums.slice(0, mid);
    console.log("Left:", left);
    const right = nums.slice(mid);
    console.log("Right:", right);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

let nums = [2,0,2,1,1,0];

console.log(mergeSort(nums));
