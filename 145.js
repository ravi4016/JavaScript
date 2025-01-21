const map =new Map([
    ['na', "John"],
    ['age', 30],
    ['city', "New York"]
]);
for (const [key,value] of map) {
    console.log(`key : ${key} , value: ${value}`);
}
