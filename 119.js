let arr = [1,2,3,3,4,5,7,7,2,1]; 
let c;

for (let i = 0; i < arr.length; i++) {
    c = 1; 
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            c++;
        }
    }

    if (arr.indexOf(arr[i]) === i) {
        console.log(arr[i] + " " + c);
    }
}
