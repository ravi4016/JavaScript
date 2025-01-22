for(var i=1;i<=6;i++){
    for(j=1;j<=7;j++){
      if(j==1&&i==1||i==1&&j==7||i==2&&(j==2||j==6)||i==3&&(j==3||j==5)||i==4&&j==4||i==5&&j==4||i==6&&j==4)
      console.log("*");
    
    else
    console.log("&nbsp;&nbsp;");
    }
    console.log('<br/>');
  }
 