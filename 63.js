let num=10,rem="";
while(num>0){
    rem=num%2+rem;
    num=Math.floor(num/2);
   
}
console.log(rem);