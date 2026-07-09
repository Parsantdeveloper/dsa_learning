

 function fabonacii(n){
    if(n===0)return 0;
    if(n===1)return 1;
    return fabonacii(n-2)+fabonacii(n-1);

 }

 console.log(fabonacii(6));