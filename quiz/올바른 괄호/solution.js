const LEFT_SIGN = '(';
const RIGHT_SIGN = ')';

function solution(s) {
  if (s[0] === RIGHT_SIGN || s[s.length - 1] === LEFT_SIGN || s.length === 1) {
    return false;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    a;
    if (stack[stack.length - 1] === LEFT_SIGN && s[i] === RIGHT_SIGN) {
      stack.pop();
      continue;
    }

    if (stack[stack.length - 1] === RIGHT_SIGN && s[i] === RIGHT_SIGN) {
      return false;
    }

    stack.push(s[i]);
  }

  return stack.length > 0 ? false : true;
}
