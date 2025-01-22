function iterateArray(arr,callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
  }

function arrElement(num){
    console.log(num);
}

let arr = [1,2,3,4,5];
iterateArray(arr,arrElement);

