function solution(s) {
  let str = s;
  let zero = 0;
  let count = 0;

  while (str !== '1') {
    const beforeLen = str.length;

    const formattedStr = str.split('0').join('');
    const afterLen = formattedStr.length;

    str = afterLen.toString(2);
    zero += beforeLen - afterLen;
    count += 1;
  }

  return [count, zero];
}
