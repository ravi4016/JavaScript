for(var i=1;i<=6;i++){
    for(j=1;j<=5;j++){
      if(j>1&&j<5&&(i==1||i==5)||i>1&&i<5&&(j==1||j==5)||i==4&&j==3||i==6&&j==5)
      console.log(" *");
    
    else
    console.log("&nbsp &nbsp");
    }
    console.log('<br/>');
  }