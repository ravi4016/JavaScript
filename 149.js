let map1 = new Map([
    ['name', 'John'],
    ['age', 30]
]);
  
let map2 = new Map([
    ['city', 'New York'],
    ['age', 35] 
]);
  
const mergedMap = new Map([...map1, ...map2]);
  
console.log(mergedMap);
  
  