function solution(d, budget) {
  const prices = d.sort((a, b) => a - b);
  let currentBudget = budget;
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > currentBudget) {
      return result;
    }

    currentBudget -= prices[i];
    result += 1;
  }

  return result;
}
