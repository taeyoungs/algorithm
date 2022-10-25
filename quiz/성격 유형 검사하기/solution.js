const score = [3, 2, 1, 0, 1, 2, 3];
const indicators = [
  ['R', 'T'],
  ['C', 'F'],
  ['J', 'M'],
  ['A', 'N'],
];

function solution(survey, choices) {
  const table = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const [type1, type2] = survey[i].split('');
    const choice = choices[i] - 1;

    if (choice > 3) {
      table[type2] += score[choice];
    }

    if (choice < 3) {
      table[type1] += score[choice];
    }
  }

  return indicators.reduce((acc, [type1, type2]) => {
    if (table[type1] < table[type2]) {
      return acc + type2;
    }
    return acc + type1;
  }, '');
}
