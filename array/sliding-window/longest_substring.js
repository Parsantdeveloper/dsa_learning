

var lengthOfLongestSubstring = function(s) {
      
    let max = 0;
    let map = new Map();
    let j=0;
    let left = 0;
    for(let i =0;i<s.length;i++){
        if(map.has(s[i])){
            left = Math.max(left,map.get(s[i])+1);
        }
        map.set(s[i],i)
        max =Math.max(max,i-left+1);
    }
    return max;
};

const   s = "";


console.log(lengthOfLongestSubstring(s))