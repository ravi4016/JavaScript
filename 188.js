async function factorial(num) {
    if (num<=1) {
        return 1;
    }
    return new Promise((resovle)=>{
    console.log("calculate Factorial");
     setTimeout (async()=>{
            let result = num * await factorial(num - 1); 
            resovle(result);
        },3000);
    });
}

factorial(5).
then((result)=>{
    console.log(result);
});