let str1 = "listen";
let str2 = "silent";
let l1 = str1.length;
let l2 = str2.length;

let sortedStr1 = str1.split("").sort().join("");
let sortedStr2 = str2.split("").sort().join("");

if (l1 === l2) {
    if (sortedStr1 === sortedStr2) {
        console.log("Strings are anagrams");
    } else {
        console.log("Strings are not anagrams");
    }
} else {
    console.log("Strings are not anagrams");
}