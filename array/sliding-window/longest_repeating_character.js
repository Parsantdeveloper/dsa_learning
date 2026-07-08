class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0 ;
        let maxf= 0 ;
        let result = 0 ; 
        let map = new Map()
        for(let j = 0 ; j<s.length;j++){
            map.set(s[j],(map.get(s[j])||0)+1);
            maxf=Math.max(maxf,map.get(s[j]));
            while(j-i+1-maxf>k){
            map.set(s[i],map.get(s[i])-1);
             i++
            }
            result=Math.max(result ,j-i+1);

        }
        return result;
    }
}

let s = "XYYX";
let k = 2 ;
let solution = new Solution();
console.log(solution.characterReplacement(s,k))