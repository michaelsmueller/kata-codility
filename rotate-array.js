const solution = (A, K) => {
  if (K === 0 || !A.length) return A;
  else {
    A.unshift(A.pop());
    solution(A, K - 1);
  }
  return A;
};

const A = [];
const K = 4;

console.log(solution(A, K));
