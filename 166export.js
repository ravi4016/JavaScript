function triangleArea(b, h) {
    return "Area of Triangle: " + (1 / 2) * (b * h);
}

function trianglePerimeter(a, b, c) {
    return "Perimeter of Triangle: " + (a + b + c);
}

function CircleArea(r) {
    return "Area of Circle: " + Math.PI * r * r;
}

function CirclePerimeter(r) {
    return "Perimeter of Circle: " + 2 * Math.PI * r;
}
export { triangleArea, trianglePerimeter, CircleArea, CirclePerimeter };