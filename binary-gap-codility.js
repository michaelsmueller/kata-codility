function solution(N) {
  const NBinary = N.toString(2);
  const NArray = NBinary.split('');
  let binaryGap = 0;
  let i = 0;
  while (i < NArray.length) {
    if (NArray[i] === '1') {
      let zeros = 0;
      console.log('\nposition i', i);
      for (let j = i + 1; j < NArray.length; j++) {
        console.log('checking j', j);
        if (NArray[j] === '0') {
          zeros += 1;
          console.log('adding zero, zeros is', zeros);
        } else break;
        if (zeros && NArray[j + 1] === '1') {
          console.log(`found binaryGap at position ${i} of length ${zeros}`);
          if (zeros > binaryGap) binaryGap = zeros;
          i = j;
          break;
        }
      }
    }
    i += 1;
  }
  console.log('NArray', NArray);
  return binaryGap;
}


console.log(solution(32));
