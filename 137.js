function getSetSize(set) {
    let count = 0;
    for (let value of set) {
        count++;
    }
    return count;
}

const mySet = new Set([1, 2, 3, 4, 5]);
let result = getSetSize(mySet)
console.log("Count : "+ result); 