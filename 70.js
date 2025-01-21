let a=48,b=18;
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
console.log(gcd(a,b))