for(var i=1;i<=5;i++){
    for(j=1;j<=5;j++){
      if(j==1||i==1&&j==4||i==2&&j==3||i==4&&j==3||i==5&&j==4||i==3&&j==2)
      console.log(" *");
    
    else
    console.log("&nbsp;&nbsp;");
    }
    console.log('<br/>');
  }