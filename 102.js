let str = "sonu123rawat456";
let result = "";

for (let i = 0; i < str.length; i++) {
    let digit = str[i];
    if (digit>=0 && digit<=9) {
        result +=digit;
    }    
}
console.log(result);