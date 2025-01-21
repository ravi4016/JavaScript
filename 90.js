function reverse(name){
    let l = name.length,s2 = "";
    for(let i = l-1;i>=0 ; i--){
        s2 += name.charAt(i);
    }
    return s2;
}
let s1 = "Shree";
let result = reverse(s1);
console.log(s1);
console.log("Reverse : "+result);