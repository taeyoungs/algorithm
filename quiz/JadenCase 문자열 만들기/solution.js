function capitalize([firstLetter, ...restLetters]) {
  return firstLetter.toUpperCase() + restLetters.join('').toLowerCase();
}

function solution(s) {
  return s
    .split(' ')
    .map((str) => (str === '' ? str : capitalize(str)))
    .join(' ');
}
