
var mergeAlternately = function(word1, word2) {

    let res = [];
    let w1 = word1.length ;
    let w2 = word2.length ;
     for(let i = 0  ; i<w1 || i<w2 ;i++){
         if(i<w1){
            res.push(word1[i]);
         }
         if(i<w2){
            res.push(word2[i]);
         }
     }
     return res.join("");
};

let word1 ="abc";
let word2 ="pqrs";
console.log(mergeAlternately(word1 , word2))