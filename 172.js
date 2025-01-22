function sortStrings(arr, compareCallback) {
    return arr.sort(compareCallback);
}

const words = ["banana", "apple", "cherry", "date", "fig", "grape"];

let compareByLength = function (a, b) {
    return a.length - b.length;
};

let sortedWordsByLength = sortStrings(words, compareByLength);
console.log(sortedWordsByLength);
