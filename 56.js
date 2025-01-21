var num=24,num2=36;
var temp;
while(num2>0){
    temp=num2;
    num2=num%num2;
    num=temp;
}
console.log(" the greatest common divisor (GCD) of two numbers: "+num);