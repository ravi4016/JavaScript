let side=5,side1=5,side2=5;
if(side==side1 && side1==side2){
    console.log("equilateral triangle");
}
else if(side==side1 || side1==side2 || side==side2){
    console.log("isosceles triangle");
}
else{
    console.log("scalene triangle");
}