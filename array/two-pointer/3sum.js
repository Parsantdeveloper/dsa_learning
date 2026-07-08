
  // three sum . 

  let nums = [-1,0,1,2,-1,-4]
  //       =[0,0,0,0,0,1,1,2]     [[0,0,0]]
  //         i   j k  
  nums = nums.sort((a, b) => a - b)
  let i = 0;
  let arr = []

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    let sum = 0;


    if ( i>0&&nums[i] === nums[i - 1]) continue;
    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];

      
      if (sum == 0) {
        arr.push([nums[i], nums[j], nums[k]]);
        while(j<k && nums[j]===nums[j+1]) j++ ;
        while(j<k && nums[k]===nums[k-1]) k-- ;
        
        j++; k--;


      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }



    }
  }



  console.log(arr)