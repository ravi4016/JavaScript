function isSubset(setA, setB) {
    for (let value of setA) {
        if (!setB.has(value)) {
            return false; 
        }
    }
    return true; 
}

const setA = new Set([1, 2, 3]);
const setB = new Set([1, 2, 3, 4, 5]);

console.log(isSubset(setA, setB)); 

