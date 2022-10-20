function solution(n) {
  let num = n;
  const arr = [];

  while (num >= 3) {
    arr.push(num % 3);

    num = Math.floor(num / 3);
  }
  arr.push(num);

  let len = arr.length - 1;
  return arr.reduce((acc, cur) => (acc += 3 ** len-- * cur), 0);
}
