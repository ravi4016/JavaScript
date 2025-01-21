function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
let result = isPalindrome("A man, a plan, a canal, Panama");
if(result==true){
  console.log("this is a palindrome")
}
else{
  console.log("this is not a palindrome")
}
