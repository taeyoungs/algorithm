function solution(brown, yellow) {
  const sum = brown + yellow;

  for (let i = 3; i <= sum; i++) {
    const width = i;
    const height = sum / i;

    if (!Number.isInteger(height)) {
      continue;
    }

    if (width * 2 + height * 2 - 4 === brown && width >= height) {
      return [width, height];
    }
  }
}
