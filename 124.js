let arr = [1,2,3,4,5,6,7,8];
let target = 9;
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        let sum = arr[i]+arr[j];
        if (sum == target) {
            console.log("("+arr[i]+" "+arr[j]+")");
        }
    }
}