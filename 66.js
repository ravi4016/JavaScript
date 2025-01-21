
function areAnagrams(string1, string2) {
    string1 = string1.replace(/\s+/g,'').toLowerCase();
    
    string2=string2.replace(/\s+/g,'').toLowerCase();
  return string1.split("").sort().join("") === string2.split("").sort().join("");
}
let str1= "listen";
let str2 = "silent"

if(areAnagrams(str1, str2)){
    console.log(`${str1} and ${str2} is Anagrams`);
}else{
    console.log(`${str1} and ${str2} is not Anagrams`);
}