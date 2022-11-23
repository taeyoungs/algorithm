const MISS_RUNTIME = 5;
const HIT_RUNTIME = 1;

function solution(cacheSize, cities) {
  let answer = 0;

  const cache = [];

  if (cacheSize === 0) {
    return cities.length * MISS_RUNTIME;
  }

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    const existedCityIdx = cache.indexOf(city);

    if (existedCityIdx !== -1) {
      cache.splice(existedCityIdx, 1);
      cache.push(city);
      answer = answer + HIT_RUNTIME;
      continue;
    }

    if (cache.length === cacheSize) {
      cache.shift();
    }
    cache.push(city);
    answer = answer + MISS_RUNTIME;
  }

  return answer;
}
