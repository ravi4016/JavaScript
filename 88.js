let num = 25;
let seq = num*num;
let temp = num;
let count = 0;

while(temp >0){
    count++;
    temp=parseInt(temp/10);
}
let rem = Math.pow(10,count);
let check = seq%rem;
if(check === num){
    console.log("automorphic");
}else{
    console.log("Not automorphic");
}