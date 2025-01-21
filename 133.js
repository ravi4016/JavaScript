function intersection (set1,set2) {
    var myset = new Set();
    for (const value of set1) {
        if(set2.has(value)){
            myset.add(value);
        }
    }
    return myset;
}

let set1 = new Set([1,2,3]);
let set2 = new Set([3,4,5]);
let result = intersection(set1, set2);

console.log([...result]); 