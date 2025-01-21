let a = [1, 2, 3];
let k = 1;

function rev(arr, s, e) {
    while (s < e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--;
    }
}
rev(a, 0, a.length - 1); 
rev(a, 0, k - 2);     
rev(a, k, a.length - 1); 
console.log(a.join(' '));