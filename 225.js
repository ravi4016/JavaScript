for(var i=1;i<=7;i++){
    for(j=1;j<=4;j++){
      if(j==1||i==1&&j<4||i==2&&j==4||i==3&&j==4||i==4&&j<4)
      console.log(" *");
    
    else
    console.log("&nbsp; &nbsp;");
    }
    console.log('<br/>');
  }