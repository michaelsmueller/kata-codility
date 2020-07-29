const solution = (A) => {
  const diff = [];
  let sumFirst = A[0];
  let sumLast = A.reduce((accumulator, current) => accumulator + current) - sumFirst;
  diff[0] = Math.abs(sumLast - sumFirst);
  for (let i = 1; i < A.length - 1; i++) {
    sumFirst += A[i];
    sumLast -= A[i];
    diff.push(Math.abs(sumLast - sumFirst));
  }
  console.log(diff);
  return Math.min(...diff);
};

const X = [-10, -20, -30, -40, 100];
console.log(solution(X));
