for(var i=1;i<=5;i++){
    for(j=1;j<=5;j++){
      if(j==1&&i==1||i==1&&j==5||i==2&&(j==2||j==4)||i==3&&j==3||i==4&&(j==2||j==4)||i==5&&(j==1||j==5))
      console.log("*");
    
    else
    console.log("&nbsp;&nbsp;");
    }
    console.log('<br/>');
  }