var num=29,count=0,i;

for( i=1;i<=num;i++){
    if(num%i==0)
        {
            count++;
        }
        
}
if(count%i==2){
    console.log("this number is prime: "+num);
}
else{
    console.log("this number is not a prime: "+num);
}
