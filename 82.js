let stack = [];
let isValid = true;

for (let char of str) {
    if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
    } else if (char === ')' && stack.pop() !== '(' || 
               char === '}' && stack.pop() !== '{' || 
               char === ']' && stack.pop() !== '[') {
        isValid = false;
        break;
    }
}

if (stack.length !== 0) isValid = false;

console.log(isValid ? "Valid" : "Invalid");