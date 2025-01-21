let arr = [1,2,3,4];
let l = arr.length-1,temp;
for (let i = 0; i < arr.length/2; i++) {
    temp = arr[i];
    arr[i] = arr[l];
    arr[l] = temp;
    l--
}
console.log(arr);