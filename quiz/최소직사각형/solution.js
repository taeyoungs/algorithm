function solution(sizes) {
  const rotated = sizes.map(([a, b]) => (a > b ? [a, b] : [b, a]));
  const caculated = rotated.reduce(
    ([prevWidth, prevHeight], [width, height]) => {
      return [prevWidth >= width ? prevWidth : width, prevHeight >= height ? prevHeight : height];
    },
    [0, 0]
  );

  return caculated[0] * caculated[1];
}
