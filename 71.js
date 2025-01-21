
const sumOfDigits = (n) => {
  if (n < 10) return n;
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sumOfDigits(sum);
};
console.log(sumOfDigits(9875));