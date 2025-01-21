let num=123,sum=0,rem;
while(num>0){
    rem=num%10;
    sum=sum+(rem*rem);
    num=Math.floor(num/10);
}
console.log(sum)