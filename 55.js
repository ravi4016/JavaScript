var num=18;
var rem,sum=0;
var temp=num;
while(temp>0){
    rem=temp%10;
    sum=sum+rem;
    temp=Math.floor(temp/10);
}
if(num%sum==0){
    console.log("this number divisible to sum of number: "+num);
}
else{
    console.log("this number not divisible to sum of number: "+num);
}