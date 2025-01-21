let arr = [0, 1, "", null, undefined, 2, "Hello", NaN, 3];
let filteredArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        filteredArr.push(arr[i]);
    }
}

console.log(filteredArr);  