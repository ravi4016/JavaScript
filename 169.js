function testFunction(data){
    setTimeout(()=>{
        data();
    },2000);
}
function data(){
    console.log("Ram Ram Saa");
}
testFunction(data);
