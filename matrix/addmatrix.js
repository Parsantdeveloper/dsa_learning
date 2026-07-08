
let matrix1 = [[1,2],[3,4]];
let matrix2=[[5,6],[7,8]];

let res = new Array(2).fill().map(() => new Array(2).fill(0))

for(let i =0;i<2;i++){
    
    for (let j=0;j<2;j++){
       res[i][j]=matrix1[i][j]+matrix2[i][j]
    }
}
console.log(res);