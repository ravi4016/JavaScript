for (var i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
      if (i == 1 && j > 1 && j < 5 || i == 5 && j > 1 && j < 5 || j == 1 && (i==2||i==3||i==4) || j == 5&&(i==2||i==3||i==4))
        console.log("*");

      else
        console.log("&nbsp;&nbsp;");
    }
    console.log('<br/>');
  }