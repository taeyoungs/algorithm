function cal(wires) {
  return wires.reduce((acc, [a, b]) => {
    acc[a] = acc[a] ? [...acc[a], b] : [b];
    acc[b] = acc[b] ? [...acc[b], a] : [a];

    return acc;
  }, {});
}

function recursion(idx, connectedTowers, connectedTowerTable) {
  if (connectedTowers.includes(idx)) {
    return;
  }

  if (!connectedTowerTable[idx]) {
    connectedTowers.push(idx);
    return;
  }

  connectedTowers.push(idx);
  for (let i = 0; i < connectedTowerTable[idx].length; i++) {
    recursion(connectedTowerTable[idx][i], connectedTowers, connectedTowerTable);
  }
}

function solution(n, wires) {
  const answer = [];

  for (let i = 0; i < wires.length; i++) {
    const [a, b] = wires[i];
    const copied = wires.slice(0, i).concat(wires.slice(i + 1));

    const connectedTowerTable = cal(copied);

    const arrA = [];
    recursion(a, arrA, connectedTowerTable);
    const arrB = [];
    recursion(b, arrB, connectedTowerTable);

    answer.push(Math.abs(arrA.length - arrB.length));
  }

  return Math.min(...answer);
}
