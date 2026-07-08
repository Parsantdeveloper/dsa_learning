let board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


var isValidSudoku = function(board) {
    
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());
   
    for(let i = 0 ; i<board.length ; i++){
     
        for(let j = 0 ; j<board.length;j++){
            let val = board[i][j];
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if(val==".")continue;

            if(rows[i].has(val))return false;
            rows[i].add(val);

            if(cols[j].has(val))return false;
            cols[j].add(val);

            if(boxes[boxIndex].has(val))return false ;
            boxes[boxIndex].add(val);

        }
    }
    return true;
    
   
   
};

// var isValidSudoku = function(board) {
//     let rows = Array.from({ length: 9 }, () => new Set());
//     let cols = Array.from({ length: 9 }, () => new Set());
//     let boxes = Array.from({ length: 9 }, () => new Set());

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {

//             let val = board[i][j];
//             if (val === ".") continue;

//             let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

//             // check row
//             if (rows[i].has(val)) return false;
//             rows[i].add(val);

//             // check col
//             if (cols[j].has(val)) return false;
//             cols[j].add(val);

//             // check box
//             if (boxes[boxIndex].has(val)) return false;
//             boxes[boxIndex].add(val);
//         }
//     }
//     console.log(rows)

//     return true;
// };
console.log(isValidSudoku(board))
