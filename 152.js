function dividesTwoNum(num,diviser) {
    if (num/diviser>0) {
        return num/diviser;
    }
    else{
        throw new Error("diviser is zero  and negetive ");
    }
}

let num = 10;
let diviser = -2;
console.log(dividesTwoNum(num,diviser));