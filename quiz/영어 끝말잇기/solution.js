function solution(n, words) {
  const arr = [words[0]];

  for (let i = 1; i < words.length; i++) {
    const previousWord = arr[arr.length - 1];

    if (arr.includes(words[i]) || previousWord[previousWord.length - 1] !== words[i][0]) {
      const order = Math.floor(i / n) + 1;
      const num = (i % n) + 1;
      return [num, order];
    }

    arr.push(words[i]);
  }

  return [0, 0];
}
