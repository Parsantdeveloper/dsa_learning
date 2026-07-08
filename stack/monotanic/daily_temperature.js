
var dailyTemperatures = function (temperatures) {

    let stack = [];
    let result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length ; i++) {
            while (stack.length  && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let idx = stack.pop();
                result[idx] = i-idx;
            }

            stack.push(i)
    }
    return result
};

let temperatures = [55,38,53,81,61,93,97,32,43,78];
console.log(dailyTemperatures(temperatures))
