let nm = "Shree Rawat";
let str = nm.toLowerCase();

let result = "";
for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str.charAt(i)) === -1) {
        result += str.charAt(i); 
    }
}

console.log(result);