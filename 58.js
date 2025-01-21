let num=19,rem,temp=num;
while(true){
    let sum=0;
    while(num>0){
        rem=num%10;
        sum+=rem*rem;
        num=Math.floor(num/10);
    }
    if(sum==1){
        console.log("this number is happy number: "+temp);
        break;
    }
    if(sum==4){
        console.log("this number is not happy number: "+temp);
        break;
    }
    num=sum;
}