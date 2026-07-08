
// 3. Longest Substring Without Repeating Characters

 var lengthOfLongestSubstring = function(s) {
   let left = 0 ;
   let map = new Map();
   let max = 0;

   for(let i=0;i<s.length;i++){
    if(map.has(s[i])){
        left = Math.max(left , map.get(s[i])+1);
    }
    map.set(s[i],i);
    max = Math.max(max , i-left+1);
   }
   console.log(map)
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"))