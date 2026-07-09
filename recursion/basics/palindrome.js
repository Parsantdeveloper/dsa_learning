
 let str = "bob";


 function palindrome(str,idx){
    if(idx>=str.length-idx-1)return true ;

    if(str[idx]!==str[str.length-idx-1]) return false 
    
    return palindrome(str,idx+1)
    
    
 }

  console.log(palindrome(str,0));