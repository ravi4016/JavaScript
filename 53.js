var num=1234;
var revrse=0;
while(num>0){
    rem=num%10;
   revrse=(revrse*10)+rem;
    num=Math.floor(num/10);
}
console.log(revrse);