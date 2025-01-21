let arr1 = [1, 2, 6, 7, 9, 2];
let arr2 = [3, 4, 2, 6];
let arr = arr1.concat(arr2);
let arr3 = []; 

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] != arr[j] && !arr3.includes(arr[i])) {
            console.log(arr[i]);
            arr3.push(arr[i]); 
        }
    }
}
