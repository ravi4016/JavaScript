let s1 = "Shree rawat",count = 0;
let nm = s1.toLowerCase();

for (let i = 0; i < nm.length; i++) {
    if(nm.charAt(i) === 'a' || nm.charAt(i) === 'e' || nm.charAt(i) === 'i' || nm.charAt(i) === 'o' || nm.charAt(i) === 'u'){
        count++;
    } 
}
console.log("String Count is = "+ count);