
function findNthTerm(a, r, n) {
  if (n === 1) {
    return a;
  }
  return r * findNthTerm(a, r, n - 1);
}
console.log(findNthTerm(2,3,4));