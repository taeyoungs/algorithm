function solution(want, number, discount) {
  let answer = 0;

  const wantedTable = {};

  for (let i = 0; i < want.length; i++) {
    wantedTable[want[i]] = number[i];
  }

  let start = 0;
  let end = 9;

  while (end < discount.length) {
    const discountTable = {};

    for (let i = start; i <= end; i++) {
      discountTable[discount[i]] = discountTable[discount[i]] ? discountTable[discount[i]] + 1 : 1;
    }

    const isSame = want.every((item) => discountTable[item] === wantedTable[item]);

    if (isSame) {
      answer = answer + 1;
    }

    start = start + 1;
    end = end + 1;
  }

  return answer;
}
