// 등차수열의 일반항과 등차수열의 합의 일반항을 이용한 문제 풀이

function solution(price, money, count) {
  const an = price + (count - 1) * price;
  const totalPrice = (count * (price + an)) / 2;

  return money - totalPrice >= 0 ? 0 : totalPrice - money;
}
