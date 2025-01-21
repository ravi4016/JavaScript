let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3,6];
let isSubset = true; 

for (let j = 0; j < arr2.length; j++) {
    let found = false; 
    for (let i = 0; i < arr1.length; i++) {
        if (arr2[j] === arr1[i]) {
            found = true;
            break; 
        }
    }
    if (!found) {
        isSubset = false; 
        break; 
    }
}

if (isSubset) {
    console.log("Subset");
} else {
    console.log("Not Subset");
}
