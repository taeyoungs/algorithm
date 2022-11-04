const bonusTable = {
  S: 1,
  D: 2,
  T: 3,
};

function solution(dartResult) {
  const scores = [];

  let score = '';
  for (let i = 0; i < dartResult.length; i++) {
    const char = dartResult[i];

    if (/[0-9]/.test(char)) {
      score += char;
      continue;
    }

    if (/[SDT]/.test(char)) {
      scores.push((+score) ** bonusTable[char]);
      score = '';
      continue;
    }

    if (char === '*') {
      if (scores.length - 2 >= 0) {
        scores[scores.length - 2] = scores[scores.length - 2] * 2;
      }
      scores[scores.length - 1] = scores[scores.length - 1] * 2;
      continue;
    }

    if (char === '#') {
      scores[scores.length - 1] = scores[scores.length - 1] * -1;
    }
  }

  return scores.reduce((acc, cur) => acc + cur, 0);
}
