let num=45;
let c=1,sqr,a=0,b=0,sum=0,temp=num;
sqr=num*num;
while(num>0){
c=c*10;
num=Math.floor(num/10);
}
a=sqr%c;
b=Math.floor(sqr/c);
sum=a+b;

if(sum==temp){
    console.log("yes kaprekar number")
}
else{
console.log("don't kaprekar number")
}