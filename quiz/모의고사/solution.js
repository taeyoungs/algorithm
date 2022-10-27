function grading(routine, answers) {
  return answers.reduce((acc, cur, idx) => {
    const currentIdx = idx % routine.length;
    return cur === routine[currentIdx] ? acc + 1 : acc;
  }, 0);
}

function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const arr = [grading(one, answers), grading(two, answers), grading(three, answers)];
  const max = Math.max(...arr);

  return arr.reduce((acc, cur, idx) => {
    return cur === max ? [...acc, idx + 1] : acc;
  }, []);
}
