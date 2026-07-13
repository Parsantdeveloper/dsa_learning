

let people  = [5,1,4,2]
let limit = 6;

   // [1,2,4,5]

var numRescueBoats = function(people, limit) {

    people = people.sort((a,b)=>a-b);
    let i=0;
    let n =people.length-1;
    let j =n;
    let count =0;
    while(i<=j){
      
        if(people[i]+people[j]<=limit){
            i++;
            j--;
            count++;
        }else{
            count++;
            j--;
        }

    }
    return count;
    
};


console.log(numRescueBoats(people,limit));