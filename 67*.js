
let num=6;
function fibbona(num){
    if(num==0||num==1){
        return 1;
    }
    else{
        let fib1=fibbona(num-1);
        let fib2=fibbona(num-2);
      return fib1+fib2;
        
    }
    
}
for(let i=0;i<num;i++){
    console.log(fibbona(i));
}
