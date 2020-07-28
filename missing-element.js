const sortFn = (a, b) => a - b;

const solution = (A) => {
  const sorted = A.sort(sortFn);

  if (sorted.length === 0) return 1;

  if (sorted.length === 1) {
    if (sorted[0] === 1) return 2;
    else return 1;
  }

  if (sorted[0] !== 1) return 1;

  for (let i = 0; i < sorted.length - 1; i++) {
    console.log(`i ${i} sorted[i] ${sorted[i]} sorted[i + 1] ${sorted[i + 1]}`);
    if (sorted[i] + 1 !== sorted[i + 1]) return sorted[i] + 1;
  }

  return sorted[sorted.length - 1] + 1;
}

const A = [4, 3, 6, 2, 5, 20, 1, 8, 9, 14, 7, 10, 11, 12, 13, 16, 17, 18, 19, 21, 22 ];
// const A = [];

console.log(solution(A));
