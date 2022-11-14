function checkNumOfOne(num) {
  let count = 0;

  while (num > 1) {
    const rest = num % 2;

    if (rest === 1) {
      count += 1;
    }

    num = Math.floor(num / 2);
  }

  if (num === 1) {
    return count + 1;
  }

  return count;
}

function solution(n) {
  let num = n + 1;
  const standard = checkNumOfOne(n);

  while (true) {
    if (standard === checkNumOfOne(num)) {
      return num;
    }

    num += 1;
  }
}
