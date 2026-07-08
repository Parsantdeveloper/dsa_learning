
 let nums = [1,3,1,2,1,2,2,1,3,2]
 let k = 2 ;


 var topKFrequent = function(nums, k) {
     
     let count = new Map()
     let arr = [ ]
       for(let num of nums){
         count.set(num,(count.get(num)||0)+1);
       }
       for(let [key,value]of count){
        arr.push([key,value]);
       }
       arr = arr.sort((a,b)=>b[1]-a[1]);
       arr.length=k;
       return arr.map(data=>data[0])
    }

console.log(topKFrequent(nums,k))