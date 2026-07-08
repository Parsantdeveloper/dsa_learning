
// delete from end 

// Input:
// [1,2,3,4]

// Output:
// [1,2,3]

    function deleteFromEnd(arr){
       arr.length--
       return arr;
    }
    deleteFromEnd([1,2,3])

    function deleteFromBeggining(arr){
      for(let i=0 ;i<arr.length;i++){
         arr[i]=arr[i+1];
      }
      arr.length--
    return arr;
    }
    deleteFromBeggining([1,2,3,4])

    
    // Question 6 — Delete at Index
//     Input:
// [1,2,3,4,5]
// delete index 2

// Output:
// [1,2,4,5]

   function deleteAtIndex(arr,index){
     for(let i=index;i<arr.length;i++){
         arr[i]=arr[i+1];
     }
       arr.length--;
       return arr;
   }

     deleteAtIndex([1,2,3,4,5],2);


     // Question 7 — Remove All Occurrences
//      Input:
// [1,2,3,2,4,2]
// remove 2

// Output:
// [1,3,4]

 function removeAllAccurance(arr,value){
    let i =0 
    let j=0;
     while(j<arr.length){
       if(arr[j]!=value){
        arr[i]=arr[j]
        i++
       }
       j++   
     }
     
    arr.length=i;
    console.log(arr)
}

 removeAllAccurance([1,2,3,2,4,2],2);