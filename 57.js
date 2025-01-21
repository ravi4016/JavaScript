var num=6,num1=8;
var temp;
while(num1>0){
    temp=num1;
    num1=num%num1;
    num=2*(num*num1);
}
console.log(num);
