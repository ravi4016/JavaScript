function sqr(num){
    if(typeof(num)==='number'){
        return num*num;
    }
    else{
        throw new Error("Input a number");
    }
}
let num = 'bittu';
console.log(sqr(num));