let camelStr = "ShreeRawat";
let snakeStr = "";

for (let i = 0; i < camelStr.length; i++) {
    let char = camelStr[i];
    if (char>="A" && char<="Z") {
        snakeStr+= "_"+char.toLowerCase();
    }
    else{
        snakeStr+= char;
    }
}
console.log(snakeStr);