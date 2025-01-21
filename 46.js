
var num=1634;
var digit=0;
var sum=0;
var temp;
temp=num;
while(temp>0){
    temp = Math.floor(temp / 10);
    digit++
}
temp=num;
while(temp>0){
    rem=temp%10;
    let power=1;
    for( var i=1;i<=digit;i++){
        power = Math.pow(rem, digit);
    }
sum=sum+power;
temp = Math.floor(temp / 10);

}
if(sum==num){
    console.log("this number is armstrong: "+num);
}
else{
    console.log("this number did't armstrong: "+num);
}