function reverse(name){
    let l = name.length,s2 = "";
    for(let i = l-1;i>=0 ; i--){
        s2 += name.charAt(i);
    }
    return s2;
}
let nm = "Madam";
let s1 = nm.toLowerCase();
let result = reverse(s1);

if(result == s1){
    console.log("P");
}
else{
    console.log("Not P");
}