function filterArray(num,callback) {
    let result = [];
    for(let i=0;i<num.length;i++){
        if(callback(num[i])){
            result.push(num[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 == 0;
}

let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = filterArray(numbers,isEven);
console.log(evenNumbers);