let a=8,b=16,c;
c=a<b?a:b;
for(let i=1;i<c;i++){
    if(a%i==0 && b%i==0){
       a=a/i;
       b=b/i;
    }
}
console.log(a+":"+b);