for(var i=1;i<=7;i++){
    for(j=1;j<=5;j++){
      if(i==1||j==4&&i<7||i==7&&j<3||i>5&&j==1)
      console.log(" *");
    
    else
    console.log("&nbsp;&nbsp;");
    }
    console.log('<br/>');
  }