for(var i=1;i<=7;i++){
    for(j=1;j<=4;j++){
      if(j==1||j<4&&(i==1||i==4||i==7)||j==4&&(i==2||i==3||i==5||i==6))
      console.log(" *");
    
    else
    console.log("&nbsp; &nbsp;");
    }
    console.log('<br/>');
  }