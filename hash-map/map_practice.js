
 let map = new Map();

//  console.log(map);

//  map.set(1,true);
//  map.set("apple",2);
//  map.set(()=>2, "function");

//  console.log(map.get("apple"))
//  console.log(map.has(1))
//  console.log(map.size)

// map.set(1,10);
// map.set(2,20);

// for(let[key,value]of map){
//     console.log(`key: ${key} value: ${value}`)
// }

// let obj={
//     name:'prashant',
//     caste:"brahmin"
// }



// for(let key in obj){
//    console.log(key, obj[key])
// }


 let arr = [1,2,1,2,3,3,2,1]

  for(let i =0;i<arr.length;i++){
  map.set(arr[i],(map.get(arr[i])||0)+1)  }

   for (let [key,value] of map){
        console.log(`key: ${key} value: ${value}`)

   }
