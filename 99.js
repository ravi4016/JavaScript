let nm = "This is simple String";
let str = nm.split(" ");

let max = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i].length >= max) {
        max = i;
    }
}
console.log(str[max]);