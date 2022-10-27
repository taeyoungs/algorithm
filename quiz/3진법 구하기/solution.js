// #1
function solution1(n) {
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

// #2 Number.parseInt 활용한 방식
function solution1(n) {
  let num = n;
  const arr = [];

  while (num >= 3) {
    arr.push(num % 3);

    num = Math.floor(num / 3);
  }
  arr.push(num);

  return +Number.parseInt(arr.join(''), 3);
}
