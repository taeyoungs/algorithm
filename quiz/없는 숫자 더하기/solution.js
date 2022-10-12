function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, idx) => {
    return acc + (signs[idx] ? cur : -cur);
  }, 0);
}
