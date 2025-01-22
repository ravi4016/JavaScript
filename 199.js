for (var i = 1; i <= 5; i++) {
    for (j = 1; j <= 5 - i; j++) {
        console.log(" &nbsp;");
    }
     var num =i;
    for (var k = 1; k <= i; k++) {
        console.log(num);
        num++;
    }
    for (k = 2; k<=i; k++) {
        num--;
        console.log(num-1);
    }

    console.log('<br/>');
}
