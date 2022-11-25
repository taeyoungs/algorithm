function getTableInfo(arr) {
  const table = {};
  for (let i = 0; i < arr.length; i++) {
    table[arr[i]] = table[arr[i]] ? table[arr[i]] + 1 : 1;
  }

  return [table, Array.from(Object.keys(table)).length];
}

function solution(topping) {
  let answer = 0;

  if (topping.length === 1) {
    return 0;
  }

  let [leftTable, leftNumberOfKeys] = getTableInfo([]);
  let [rightTable, rightNumberOfKeys] = getTableInfo(topping.slice());

  for (let i = 0; i < topping.length; i++) {
    const currentTopping = topping[i];

    if (!leftTable[currentTopping]) {
      leftNumberOfKeys = leftNumberOfKeys + 1;
    }

    if (rightTable[currentTopping] === 1) {
      rightNumberOfKeys = rightNumberOfKeys - 1;
    }

    leftTable[currentTopping] = leftTable[currentTopping] ? leftTable[currentTopping] + 1 : 1;
    rightTable[currentTopping] = rightTable[currentTopping] ? rightTable[currentTopping] - 1 : 0;

    if (leftNumberOfKeys === rightNumberOfKeys) {
      answer = answer + 1;
    }
  }

  return answer;
}
