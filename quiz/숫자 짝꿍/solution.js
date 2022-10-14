function solution(X, Y) {
  let answer = '';
  let x = X.slice();
  let y = Y.slice();

  for (let i = 9; i >= 0; i--) {
    const filteredX = x.split(i).join('');
    const filteredY = y.split(i).join('');

    const deletedXCount = x.length - filteredX.length;
    const deletedYCount = y.length - filteredY.length;

    x = filteredX;
    y = filteredY;

    if (deletedXCount === 0 || deletedYCount === 0) {
      continue;
    }

    const len = deletedXCount >= deletedYCount ? deletedYCount : deletedXCount;

    answer = answer.padEnd(answer.length + len, i);
  }

  if (answer.charAt(0) === '0') {
    return '0';
  }

  return answer ? answer : '-1';
}
