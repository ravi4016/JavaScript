function route(num){
    if(num<0){
        throw new Error ("Negetive Number not allowed ");
    }else{
        return Math.sqrt(num);
    }
}
let num = 10;

console.log(route(num));