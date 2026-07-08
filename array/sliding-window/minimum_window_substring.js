var minWindow = function (s, t) {
    let sCount = new Array(128).fill(0);
    let tCount = new Array(128).fill(0);

    for (let i = 0; i < t.length; i++) {
        tCount[t.charCodeAt(i)]++;
    }

    let required = 0;
    for (let i = 0; i < 128; i++) {
        if (tCount[i] > 0) required++;
    }

    let matches = 0;
    let left = 0;
    let min = "";
    let minLen = Infinity;

    for (let right = 0; right < s.length; right++) {

        let idx = s.charCodeAt(right);

        sCount[idx]++;

        if (sCount[idx] === tCount[idx]) {
            matches++;
        }

        while (matches === required) {

            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                min = s.slice(left, right + 1);
            }

            let leftIdx = s.charCodeAt(left);

            if (sCount[leftIdx] === tCount[leftIdx]) {
                matches--;
            }

            sCount[leftIdx]--;
            left++;
        }
    }

    return min;
};

let s = "ADOBECODEBANC";
let t = "ABC";
console.log(checkInclusion(s, t)); // BANC



// var minWindow = function (s, t) {
//     if (t.length > s.length) return "";

//     let countT = new Map();
//     let window = new Map();

//     // build frequency of t
//     for (let c of t) {
//         countT.set(c, (countT.get(c) || 0) + 1);
//     }

//     let have = 0;
//     let need = countT.size;

//     let left = 0;
//     let resLen = Infinity;
//     let res = "";

//     for (let right = 0; right < s.length; right++) {
//         let c = s[right];

//         // add to window
//         window.set(c, (window.get(c) || 0) + 1);

//         // check if this character is satisfied
//         if (countT.has(c) && window.get(c) === countT.get(c)) {
//             have++;
//         }

//         // shrink window while valid
//         while (have === need) {

//             // update answer
//             if (right - left + 1 < resLen) {
//                 resLen = right - left + 1;
//                 res = s.slice(left, right + 1);
//             }

//             let leftChar = s[left];
//             window.set(leftChar, window.get(leftChar) - 1);

//             // if it was valid before, and now broken → reduce have
//             if (countT.has(leftChar) &&
//                 window.get(leftChar) < countT.get(leftChar)) {
//                 have--;
//             }

//             left++;
//         }
//     }

//     return res;
// };

// let s = "ADOBECODEBANC";
// let t = "ABC";
// console.log(minWindow(s, t)); // "BANC"
