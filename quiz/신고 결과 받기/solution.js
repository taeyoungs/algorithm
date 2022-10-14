function solution(id_list, report, k) {
  const reporters = {};
  const emailTable = {};

  for (let i = 0; i < id_list.length; i++) {
    reporters[id_list[i]] = new Set();
    emailTable[id_list[i]] = 0;
  }

  for (let i = 0; i < report.length; i++) {
    const [reporter, target] = report[i].split(' ');

    if (!reporters[target].has()) {
      reporters[target].add(reporter);
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    const user = reporters[id_list[i]];

    if (user.size >= k) {
      user.forEach((id) => emailTable[id]++);
    }
  }

  return Array.from(Object.values(emailTable));
}
