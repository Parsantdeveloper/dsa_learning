

let arr=[1,2,3,4,5];
let n = arr.length-1

function swap(arr,idx,n){
   [arr[idx],arr[n]]=[arr[n],arr[idx]];  
}

function reverse(arr,idx){
    if(idx>=arr.length-idx-1)return ;
    swap(arr,idx,arr.length-idx-1)
     reverse(arr,idx+1);
}

reverse(arr,0);

console.log(arr)