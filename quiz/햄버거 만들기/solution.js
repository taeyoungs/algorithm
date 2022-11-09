function solution(ingredient) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < ingredient.length; i++) {
    stack[stack.length] = ingredient[i];

    if (stack.slice(-4).join('') === '1231') {
      answer += 1;
      stack.length = stack.length - 4;
    }
  }

  return answer;
}
