// #1 2중 for문을 이용한 방식

function solution1(numbers) {
  const answer = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
}

// #2 Recursion을 이용한 방식
function solution2(numbers) {
  const answer = new Set();

  function recursion(arr, start) {
    if (arr.length === 2) {
      answer.add(arr[0] + arr[1]);
      return;
    }

    for (let i = start; i < numbers.length; i++) {
      recursion([...arr, numbers[i]], i + 1);
    }
  }

  recursion([], 0);

  return Array.from(answer).sort((a, b) => a - b);
}
