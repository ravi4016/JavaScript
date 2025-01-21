function updateMapValue(map, key, newValue) {
    if (map.has(key)) {
      map.set(key, newValue);
      console.log(`Updated: Key '${key}' now has value '${newValue}'.`);
    } else {
      console.log(`Key does not exist.`);
    }
  }

const map =new Map([
    ['na', "John"],
    ['age', 30],
    ['city', "New York"]
]);
updateMapValue(myMap, 'age', 35); 
console.log(myMap);