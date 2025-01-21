const nestedArray = [1, 2, [3, [9,4, [5, 6]]]];
const flatArray = nestedArray.flat(3); 
console.log(flatArray);