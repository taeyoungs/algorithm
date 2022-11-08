function solution(board, moves) {
  const stack = [];
  const len = board.length;
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    const y = moves[i] - 1;

    let selected = null;
    for (let x = 0; x < len; x++) {
      const item = board[x][y];

      if (item !== 0) {
        board[x][y] = 0;
        selected = item;
        break;
      }
    }

    if (!selected) {
      continue;
    }

    if (stack.length === 0) {
      stack.push(selected);
      continue;
    }

    const last = stack.pop();

    if (last === selected) {
      count += 2;
      continue;
    }

    stack.push(last);
    stack.push(selected);
  }

  return count;
}
