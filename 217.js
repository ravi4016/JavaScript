for (var i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
      if (j == 1 || i == 3 || j == 5)
        console.log("*");

      else
        console.log("&nbsp;&nbsp;");
    }
    console.log('<br/>');
  }
