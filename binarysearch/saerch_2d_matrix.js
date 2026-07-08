

var searchMatrix = function(matrix, target) {
    
    let row = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = row*cols-1;
    while(left<=right){
      let mid = Math.floor((left+right)/2);
      let row = Math.floor(mid/cols);
      let col = mid%cols;
      let value = matrix[row][col];

      if(value===target)return true;
      if(value<target)left=mid+1;
      if(value>target)right=mid-1;
    }
    return false ;
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let target = 3
console.log(searchMatrix(matrix, target))