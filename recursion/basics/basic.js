
//  unlimited function calls and stops due to error called stack overflow 
//  function greeting(){
//      console.log("hello")
//      greeting()
//  }
//  greeting()


//  function print(n){
//      if(n==0) return;

//      console.log(n);
//      print(n-1);
//  }

//  print(10)


// function Add(n){
//     let sum = 0;
//     if(n=0)return;
//     sum+=n;
//     console.log(sum);
//    return Add(n-1);
// }
//  Add(5);


 function print(n){
  if(n===0)return;
  console.log("start "+n);
  print(n-1);
  console.log("end "+n);
 }

 print(3);