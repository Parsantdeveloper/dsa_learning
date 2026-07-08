
var minEatingSpeed = function(piles, h) {
    let l =1 ;
    let r = Math.max(...piles);
    let res = r ;

    while(l<=r){
        let k = Math.floor((l+r)/2);
        let time = 0 ;
        for(let pile of piles ){
            time+=Math.ceil(pile/k);
        }
        if(time<=h){
            res = k ; 
            r = k-1 ;
        }else{
            l = k+1;
        }
    }
    return res ;
};

let piles = [3,6,7,11];
let h =8;
console.log(minEatingSpeed(piles,h))