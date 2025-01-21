function union(set1,set2) {
    return new Set([...set1,...set2]);
}

let set1 = new Set([1,2,3]);
let set2 = new Set([3,4,5]);

console.log(union(set1,set2));
let result = union(set1, set2);

console.log([...result]); 