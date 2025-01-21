let array1 = [1, 2,3,4]; 
let array2 = [1,2]; 
let isSubset = array2.every(element => array1.includes(element));
if(isSubset == true){
    console.log("isSubset");
}else{
    console.log("Not isSubset");
}