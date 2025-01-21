let nm = "Shree Rawat";
let str = nm.toLowerCase().replace(/\s+/g, ""); 

for (let i = 0; i < str.length; i++) {
    count = 0; 
    for (let j = 0; j < str.length; j++) {
        if (i !== j && str.charAt(i) === str.charAt(j)) {
            count++; 
            break; 
        }
    }
    if (count === 0) {
        console.log("First non-repeating character:", str.charAt(i));
        break; 
    }
}
