function rotateArrayLeft(arr, n) {
    n = n % arr.length;  
    let rotatedArr = arr.slice(n).concat(arr.slice(0, n));
    return rotatedArr;
}

let resultLeft = rotateArrayLeft([1, 2, 3, 4, 5], 2);
console.log(resultLeft); 