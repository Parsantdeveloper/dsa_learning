
var mergeAlternately = function(word1, word2) {
   let res = ""
   let i =0; 
   let j =0;

   while(i<word1.length || j<word2.length){
        
      if(i<word1.length){
      res+=word1[i];
      }
      if(j<word2.length){
         res+=word2[j];
      }

      i++;
      j++;
   }
   return res;

};

let word1 ="abc";
let word2 ="pqrs";
console.log(mergeAlternately(word1 , word2))