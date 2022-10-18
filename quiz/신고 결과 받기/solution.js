// #1 class 이용해서 구한 방식

class Reporter {
  constructor(id) {
    this.id = id;
    this.idThatReportedMe = new Set();
    this.numberOfEmail = 0;
  }

  addIdThatReportedMe(id) {
    this.idThatReportedMe.add(id);
  }

  plusEmailCount() {
    this.numberOfEmail += 1;
  }

  isSuspened(count) {
    return this.idThatReportedMe.size >= count;
  }

  isAleadyReported(id) {
    return this.idThatReportedMe.has(id);
  }
}

function solution(id_list, report, k) {
  const reporters = {};

  for (let i = 0; i < id_list.length; i++) {
    reporters[id_list[i]] = new Reporter(id_list[i]);
  }

  for (let i = 0; i < report.length; i++) {
    const [reporter, target] = report[i].split(' ');

    if (!reporters[reporter].isAleadyReported()) {
      reporters[target].addIdThatReportedMe(reporter);
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    const user = reporters[id_list[i]];

    if (user.isSuspened(k)) {
      user.idThatReportedMe.forEach((id) => reporters[id].plusEmailCount());
    }
  }

  return Array.from(Object.values(reporters)).map((reporter) => reporter.numberOfEmail);
}

// #2 class 이용하지 않은 방식

function solution2(id_list, report, k) {
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
