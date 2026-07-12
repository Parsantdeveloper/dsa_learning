// 🔵 Question 5 — Two Sum (Sorted Array)
// Input:
// [1,2,3,4,6]
// target = 6

// Output:
// [2,4]

// Hint:

// left++
// right--

  function twoSum(arr,target){
  let i =0;
  let j = arr.length-1;
  let temp =[]
  while(i<j){
     let sum = arr[i]+arr[j];
     if(sum>target){
        j--
     }else if(sum<target){
        i++
     }else{
        temp=[i,j]
        return temp;
     }
    }
    }

   console.log(twoSum([2,7,11,15],9))