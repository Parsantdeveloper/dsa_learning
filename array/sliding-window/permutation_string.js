
// 567. Permutation in String

var checkInclusion = function(s1, s2) {
    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]++;
}

    let matches = 0 ;
    for(let i =0;i<26;i++){
        if(s1Count[i]===s2Count[i]){
         matches++;
        }
    }
    console.log(matches)
    // sliding window 
    let left = 0 ;
     
    for(let right= s1.length;right<s2.length;right++){

        if(matches===26) return true;
       let idx = s2.charCodeAt(right) - 97;
        //adding right 
         s2Count[idx]++;
        if(s1Count[idx]===s2Count[idx]){
            matches++;
        }else if(s1Count[idx]+1===s2Count[idx]){
            matches--;
        }

        // removing left 
        idx = s2.charCodeAt(left) - 97;
        s2Count[idx]--;
         if(s1Count[idx]===s2Count[idx]){
            matches++;
        }else if(s1Count[idx]-1===s2Count[idx]){
            matches--;
        }
        left ++;
    }

    return matches===26
    
};
let s1 ="ab";
let s2 ="aaabbb"
console.log(checkInclusion(s1,s2))