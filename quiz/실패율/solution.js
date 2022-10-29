function solution(N, stages) {
  const stageUsers = Array.from({ length: N + 2 }).fill(0);

  for (let i = 0; i < stages.length; i++) {
    stageUsers[stages[i]] += 1;
  }

  let remainingUsers = stages.length;
  const table = {};

  for (let i = 1; i <= N; i++) {
    table[i] = stageUsers[i] / remainingUsers;
    remainingUsers -= stageUsers[i];
  }

  return Array.from(Object.keys(table))
    .sort((a, b) => table[b] - table[a])
    .map((key) => +key);
}
