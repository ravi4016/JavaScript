let arr1 = [1, 2, 6, 7, 9, 2];
let arr2 = [3, 4, 2, 6];
let arr3 = []; 

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j] && !arr3.includes(arr1[i])) {
            console.log(arr1[i]);
            arr3.push(arr1[i]); 
        }
    }
}
