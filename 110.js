let arr = [1, 3, 4, 6, 2, 1];
let largest = arr[0];  

for (let i = 0; i < arr.length; i++) {
   if (arr[i]>largest) {
     largest = arr[i];
   }
}
console.log("Largest number  "+largest);