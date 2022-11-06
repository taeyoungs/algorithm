function solution(food) {
  let arr = [];

  for (let i = 1; i < food.length; i++) {
    const len = food[i] % 2 === 0 ? food[i] / 2 : (food[i] - 1) / 2;

    arr = arr.concat(Array.from({ length: len }).fill(i));
  }

  const reversed = arr.slice().reverse();

  return arr.join('') + '0' + reversed.join('');
}
