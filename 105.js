let str = "hello world";
let substring = "world";

let index = str.indexOf(substring);

if (index !== -1) {
    console.log(`The substring "${substring}" is found at index: ${index}`);
} else {
    console.log(`The substring "${substring}" is not found.`);
}

