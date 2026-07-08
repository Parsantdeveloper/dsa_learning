
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

var maxArea = function(height) {
    
    let i = 0 ;
    let j = height.length-1;
    let max = 0 ;
   
    
    while(i<j){
     let currentSum=0
      
      currentSum=(j-i)*Math.min(height[i],height[j]);
      max=Math.max(currentSum,max);
      if(height[i]<height[j]){
        i++
      }else{
        j--
      }
    }
    return max;

};

console.log(maxArea([1,1] ))