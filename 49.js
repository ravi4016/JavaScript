var num = 145;
var num2 = 0, fact = 1, rem;
var temp;
temp=num;
while (temp > 0) {
    rem = temp % 10;
    while (rem > 0) {
        fact = fact * rem;
        rem=rem-1;
    }
    
    num2+=fact;
    temp=Math.floor(temp/10);
    fact=1;
}
if(num2==num){
    console.log("this number is strong: "+num);
}
else{
    console.log("this number is not strong: "+num);
}