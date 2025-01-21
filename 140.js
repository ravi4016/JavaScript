function  countFrequency(str) {
    let myMap = new Map();
    let words = str.toLowerCase().replace(/[^\w\s]/g, '').split(" ");

    for (const word of words) {
        if(myMap.has(word)){
            myMap.set(word, myMap.get(word)+1);
        }
        else{
            myMap.set(word,1);
        }
    }
    return myMap;
}
let str = "Hello! World hello i am sonu Singh world";
let result = countFrequency(str);
console.log(result);