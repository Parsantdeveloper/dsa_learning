

var validPalindrome = function(s) {
    let i =0; let j = s.length-1;
   
    while(i<j){
        if(s[i]!==s[j]){

          return checkPalindrome(s,i+1,j)||checkPalindrome(s,i,j-1) 
        }
        i++
        j--
    }

    return true;

   
};

function checkPalindrome(s,left,right){
     while(left<right){
        if(s[left]!==s[right]){
            return false;
        }
          i++
        j--
     }
     return true;
}


let s = "aba";
console.log(validPalindrome(s));



// var validPalindrome = function(s) {
//     let i =0; let j = s.length-1;
//     while(i<j){
//         if(s[i]!==s[j]){
//            return isPalindrome(s,i+1 , j)|| 
//             isPalindrome(s,i,j-1)
//         }
//         i++ ; 
//         j--;
//     }
//     return true ;

   
// };

//  function isPalindrome(s , l ,r ){
//         while(l<r){
//             if(s[l]!==s[r]){
//                 return false
//             }
//             l++ ; r--
//         }
//         return true
//     }