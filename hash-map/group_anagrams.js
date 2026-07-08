
    let strs = ["eat","tea","tan","ate","nat","bat"];

    var groupAnagrams = function(strs) {
        let hashMap = new Map();
        
        for(let word of strs){
        const count = new Array(26).fill(0)
        for(let char of word){
            count[char.charCodeAt(0)-"a".charCodeAt(0)]+=1;
        }
        const key =count.join(",");
        if(!hashMap.has(key)){
            hashMap.set(key,[]);
        }
        hashMap.get(key).push(word);
        }
        return [...hashMap.values()]
    };

    console.log(groupAnagrams(strs));