// 🟢 Question 2 — Check Palindrome
// Input:
// "madam"

// Output:
// true


  function checkPalindrome(arr){
      let i =0 ;
      let j =arr.length-1;
      while(i<j){
        if(arr[i]!=arr[j]){
         return false
        }
        i++ ;
        j--;
      }
      return true;
  }

  console.log(checkPalindrome("madams"))