let arr = [12, 45, 2, 19, 8, 33, 21];
let smallest = arr[0]; 
let largest = arr[0];  

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i]; 
    }
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Smallest number:", smallest);
console.log("Largest number:", largest);
