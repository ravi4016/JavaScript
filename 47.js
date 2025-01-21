var num=121;
var digit;
var sum=0;
var temp=num;
while(temp>0){
    digit=temp%10;
    sum=(sum*10)+digit;
    temp=Math.floor(temp/10);
}
if(sum==num){
    console.log("Number is pallandrom: "+num);
}
else{
    console.log("Number is not pallandrom: "+num)
}