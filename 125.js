function chunkArray(arr, size) {
    let result = [];
    
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
let chunked = chunkArray(arr, 2);
console.log(chunked);