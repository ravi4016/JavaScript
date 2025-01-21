function splitArr(arr,size){
    if (size < 0 || size > arr.length) {
        console.log("Index Not found");
    }
    return [arr.slice(0,size),arr.slice(size)];
}
let arr = [1,2,3,4,5,6];
console.log(splitArr(arr,3));