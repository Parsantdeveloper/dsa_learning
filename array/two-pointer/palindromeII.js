
var validPalindrome = function(s) {
    let i =0; let j = s.length-1;
    while(i<j){
        if(s[i]!==s[j]){
           return isPalindrome(s,i+1 , j)|| 
            isPalindrome(s,i,j-1)
        }
        i++ ; 
        j--;
    }
    return true ;

   
};
 function isPalindrome(s , l ,r ){
        while(l<r){
            if(s[l]!==s[r]){
                return false
            }
            l++ ; r--
        }
        return true
    }

let s = "abca";
console.log(validPalindrome(s));