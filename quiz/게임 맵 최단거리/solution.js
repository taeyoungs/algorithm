const PATHWAY_COLOR = 1;
const VISITED_COLOR = 2;

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const records = Array.from(Array(n), () => Array(m).fill(0));
  records[0][0] = 1;

  const queue = [[0, 0]];
  maps[0][0] = VISITED_COLOR;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();

    const paths = [
      [x - 1, y],
      [x, y + 1],
      [x + 1, y],
      [x, y - 1],
    ];

    for (let i = 0; i < paths.length; i++) {
      const [a, b] = paths[i];

      if (a === -1 || b === -1 || a === n || b === m) {
        continue;
      }

      if (a === n - 1 && b === m - 1) {
        return records[x][y] + 1;
      }

      if (maps[a][b] === PATHWAY_COLOR) {
        maps[a][b] = VISITED_COLOR;
        records[a][b] = records[x][y] + 1;
        queue.push([a, b]);
      }
    }
  }

  return -1;
}
