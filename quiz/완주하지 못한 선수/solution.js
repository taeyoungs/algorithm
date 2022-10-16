function solution(participant, completion) {
  const table = {};

  completion.forEach((person) => {
    if (table[person]) {
      table[person] += 1;
    } else {
      table[person] = 1;
    }
  });

  const len = participant.length;

  for (let i = 0; i < len; i++) {
    if (!table[participant[i]]) {
      return participant[i];
    } else {
      table[participant[i]] -= 1;
    }
  }
}
