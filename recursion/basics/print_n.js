
 // recursion by printing something N times

//   function print(n){
//       if(n===0)return;
//       console.log("Prashant Bhusal");
//      return print(n-1);
//   }

//   print(10);


//   function print1toN(start,n){
// if (start === n+1) return;     
//      console.log(start);
//      print1toN(start+1,n);
//   }
//   print1toN(1,10);


function sumOfFirstN(n){
   if (n === 0) {
        return 0;
    }

    return n + sumOfFirstN(n - 1);
}
 console.log(sumOfFirstN(4))