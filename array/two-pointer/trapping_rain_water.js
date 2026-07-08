

var trap = function(height) {
    let maxLeft=[];
    let maxRight=[];
    let water=0 ;
    maxLeft[0]=height[0];
    maxRight[height.length-1]=height[height.length-1];

    for(let i = 1 ;i<height.length;i++){
        maxLeft[i]=Math.max(height[i],maxLeft[i-1]);
    }
    for(let i = height.length-2;i>=0;i--){
        maxRight[i]=Math.max(height[i],maxRight[i+1]);
    }
    for(let i = 0 ; i <height.length;i++){
       water += Math.min(maxLeft[i], maxRight[i]) - height[i]
    }
    return water ;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));