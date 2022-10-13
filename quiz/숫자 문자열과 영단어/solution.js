// 방법 1 - lookupTable & regExp
const lookupTable = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

function solution1(s) {
  const splitedStringArray = s.split(
    /(zero|one|two|three|four|five|six|seven|eight|nine|0|1|2|3|4|5|6|7|8|9)/g
  );
  const formattedArray = splitedStringArray
    .filter((str) => !!str)
    .map((str) => (lookupTable[str] ? lookupTable[str] : str))
    .join('');

  return +formattedArray;
}

// 방법 2 - lookupTable & replaceAll
const lookupTable = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};
const numberKeys = Array.from(Object.keys(lookupTable));

function solution2(s) {
  let copy = s.slice();
  for (let i = 0; i < numberKeys.length; i++) {
    copy = copy.replaceAll(numberKeys[i], lookupTable[numberKeys[i]]);
  }

  return +copy;
}

// 방법 2 - lookupTable & replaceAll & 필터 추가
const lookupTable = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};
const numberKeys = Array.from(Object.keys(lookupTable));

function solution3(s) {
  if (!isNaN(+s)) {
    return +s;
  }

  let copy = s.slice();
  for (let i = 0; i < numberKeys.length; i++) {
    if (copy.indexOf(numberKeys[i]) === -1) {
      continue;
    }

    copy = copy.replaceAll(numberKeys[i], lookupTable[numberKeys[i]]);
  }

  return +copy;
}
