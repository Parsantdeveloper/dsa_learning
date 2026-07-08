
// rlruldud; 

var judgeCircle = function(moves) {
   let map = new Map();
    
     for(let move of moves){
        map.set(move,(map.get(move)||0)+1);
     }
    
     console.log(map)
      return map.get("R") === map.get("L") && 
           map.get("U") === map.get("D");
};

console.log(judgeCircle("udrr"))