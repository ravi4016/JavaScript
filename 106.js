function removePunctuation(str) {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

let input = "Hii, Sonu Bhai, What are you doing?";
let result = removePunctuation(input);
console.log(result);

