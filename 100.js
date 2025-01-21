function isOnlyDigits(str) {
    return /^[0-9]+$/.test(str); 
}

console.log(isOnlyDigits("123456"));