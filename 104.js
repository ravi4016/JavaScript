let str = "abc";
let subStr = [];

for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j <= str.length; j++) {
        subStr.push(str.slice(i,j));
    }
    
}
console.log(subStr);