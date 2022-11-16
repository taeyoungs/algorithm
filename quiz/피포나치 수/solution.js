const NUM = 1234567;

function solution(n) {
  const arr = Array.from({ length: n + 1 });
  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i < arr.length; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % NUM;
  }

  return arr[n];
}
