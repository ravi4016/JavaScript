var num=28;
var sum=0;
for(i=1;i<num;i++){
    if(num%i==0)
        sum+=i;
}
if(num==sum){
    console.log(" prefect number: "+num);
}
else{
    console.log("not a prefect number: "+num)
}