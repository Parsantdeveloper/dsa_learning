
var carFleet = function(target, position, speed) {
    let stack =[];
    let arr=position.map((p,i)=>[p,speed[i]]);
    arr.sort((a,b)=>b[0]-a[0]);
    
    for(let i =0;i<arr.length;i++){
        stack.push((target-arr[i][0])/arr[i][1]);
        if(stack.length>=2 && stack[stack.length-1]<=stack[stack.length-2]){
            stack.pop();
        }
    }
    return stack.length;
};

let target =12 ;
let position=[10,8,0,5,3];
let speed = [2,4,1,1,3];

console.log(carFleet(target,position,speed))



// more good solution 

// /**
//  * @param {number} target
//  * @param {number[]} position
//  * @param {number[]} speed
//  * @return {number}
//  */
// var carFleet = function(target, position, speed) {
//             let pair = position.map((p, i) => [p, speed[i]]);
//         pair.sort((a, b) => b[0] - a[0]);

//         let fleets = 1;
//         let prevTime = (target - pair[0][0]) / pair[0][1];
//         for (let i = 1; i < pair.length; i++) {
//             let currTime = (target - pair[i][0]) / pair[i][1];
//             if (currTime > prevTime) {
//                 fleets++;
//                 prevTime = currTime;
//             }
//         }
//         return fleets;

// };
