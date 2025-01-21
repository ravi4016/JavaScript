function itrate(set) {
    for (const iterator of set) {
        console.log(iterator);
    }
}
let set = new Set([1,2,3,4,5]);
itrate(set);