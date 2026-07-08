var largestRectangleArea = function(heights) {
    let stack = [];
    let max = 0;

    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        let start = i;

        while (
            stack.length &&
            heights[stack[stack.length - 1]] > heights[i]
        ) {
           let h = heights[stack.pop()]
            let width = stack.length ? i - stack[stack.length - 1] - 1 : i;
             max = Math.max(max, h * width);
        }

        stack.push(i);
    }

    return max;
};

let heights = [2,1,5,6,2,3]
console.log(largestRectangleArea(heights))