let a = [1,2,3,5,6];
let l = a.length;
let x = parseInt(l/2)
console.log(a[x]);
if (l%2==0) {
    console.log(a[x-1]);
}