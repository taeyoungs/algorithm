const SCORE = {
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
};

function solution(lottos, win_nums) {
  const table = {};

  const zero = lottos.reduce((acc, cur) => {
    if (cur === 0) {
      return acc + 1;
    }

    table[cur] = 1;
    return acc;
  }, 0);
  const correct = win_nums.reduce((acc, cur) => (table[cur] ? acc + 1 : acc), 0);

  return [SCORE[correct + zero] ?? 6, SCORE[correct] ?? 6];
}
