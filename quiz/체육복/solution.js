function solution(n, lost, reserve) {
  const arr = Array.from({ length: n + 1 }).fill(1);
  arr[0] = 0;

  reserve.forEach((student) => (arr[student] += 1));
  lost.forEach((student) => (arr[student] -= 1));

  return lost
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      if (arr[cur] === 1) {
        return acc;
      }

      if (arr[cur - 1] >= 2) {
        arr[cur - 1] -= 1;
        return acc;
      }

      if (arr[cur + 1] >= 2) {
        arr[cur + 1] -= 1;
        return acc;
      }

      return acc - 1;
    }, n);
}
