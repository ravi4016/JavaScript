let nm = "Shree Rawat";
let str = nm.toLowerCase(); 
let c;

for (let i = 0; i < str.length; i++) {
    c = 0; 

    if (str.charAt(i) === " ") {
        continue;
    }
    for (let j = 0; j < str.length; j++) {
        if (str.charAt(i) === str.charAt(j)) {
            c++;
        }
    }

    if (str.indexOf(str.charAt(i)) === i) {
        console.log(str.charAt(i) + " " + c);
    }
}
