function solution(n) {
  let answer = 1;
  const middle = Math.floor(n / 2);

  for (let i = 1; i <= middle; i++) {
    let sum = 0;
    for (let j = i; j <= middle + 1; j++) {
      sum += j;

      if (sum === n) {
        answer += 1;
        break;
      }

      if (sum > n) {
        break;
      }
    }
    sum = 0;
  }

  return answer;
}
