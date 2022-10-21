function solution(a, b, n) {
  let answer = 0;
  let numOfEmptyCoke = n;

  while (numOfEmptyCoke >= a) {
    const numOfCokeForExchange = Math.floor(numOfEmptyCoke / a);
    numOfEmptyCoke -= numOfCokeForExchange * a;
    const numOfNewCoke = numOfCokeForExchange * b;
    numOfEmptyCoke += numOfNewCoke;

    answer += numOfNewCoke;
  }

  return answer;
}
