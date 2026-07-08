function count(arr){

let map = new Map()

for(let num of arr){
    map.set(num,(map.get(num)||0)+1)
}

return map

}

console.log(count([1,2,1,3,2,1]))