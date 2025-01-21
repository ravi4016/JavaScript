const map =new Map([
    ['na', "John"],
    ['age', 30],
    ['city', "New York"]
]);
const obj = Object.fromEntries(map);
console.log(obj);