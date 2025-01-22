for(var i=1;i<=7;i++){
    for(var j=1;j<=5;j++){
        if(i==1&&j>1||i==7&&j>1||j<2&&(i==2||i==3||i==4||i==5||i==6)){
            console.log("* ");
        }else{
            console.log("&nbsp &nbsp"); 
        }
        
    }
    console.log("<br/>");
}