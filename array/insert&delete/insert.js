

 function InserAtEnd(arr,value){
     arr[arr.length]=value;
     return arr;  
    }

    function InsertAtStart(arr,value){
         for(let i=arr.length;i>=0;i--){
    arr[i]=arr[i-1];
   
  }
  arr[0]=value;
  return arr;
    }

    function InsertAtIndex(arr,index,value){
        for (let i =arr.length;i>=index;i--){
         arr[i]=arr[i-1];
      }
        arr[index]=value
        return arr;
      }

    // console.log(InsertAtIndex([1,2,3,4,5],2,6));
