// #1 3중 for문을 이용한 방식
function solution1(number) {
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

// #2 Recursion을 이용한 방식
function solution2(number) {
  let answer = 0;

  function recursive(arr, start) {
    // base case:
    if (arr.length === 3) {
      const sum = arr.reduce((acc, cur) => acc + cur, 0);

      if (sum === 0) {
        answer += 1;
      }
      return;
    }

    // recursive case:
    for (let i = start; i < number.length; i++) {
      recursive([...arr, number[i]], i + 1);
    }
  }

  recursive([], 0);

  return answer;
}
