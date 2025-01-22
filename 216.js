for(var i=1;i<=7;i++){
    for(j=1;j<=5;j++){
      if(i==1&&j>1&&j<5||i==7&&j>1&&j<5||i==5&&j>2||j==1&&(i>1&&i<7)||i==6&&j==5||i==2&&j==5 )
      console.log(" *");
    
    else
    console.log("&nbsp; &nbsp;");
    }
    console.log('<br/>');
  }