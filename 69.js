
function generatePascalsTriangle(n) {
  if (n <= 0) return [];
  if (n === 1) return [[1]];
  const triangle = [[1], [1, 1]];
  for (let i = 2; i < n; i++) {
    const row = [1];
    const prevRow = triangle[i - 1];
    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
}
console.log(generatePascalsTriangle(5));
