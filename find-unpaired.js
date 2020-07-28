const solution = (A) => {
  const sorted = A.sort();
  if (sorted.length === 0) return null;
  else if (sorted.length === 1) return sorted[0];
  else {
    for (let i = 0; i < sorted.length - 2; i += 2) {
      if (sorted[i] !== sorted[i + 1]) return sorted[i];
    }
  }
  return sorted[sorted.length - 1];
};

const A = [1, 3, 3, 5, 5, 9, 1];
console.log('unpaird should be', solution(A));
