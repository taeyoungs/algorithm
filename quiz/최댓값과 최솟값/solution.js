function solution(s) {
  const nums = s.split(' ').map((str) => +str);

  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}
