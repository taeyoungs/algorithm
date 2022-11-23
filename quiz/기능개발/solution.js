// #1 Stack을 활용한 방법
const COUNT_INDEX = 0;
const TIME_INDEX = 1;

function solution1(progresses, speeds) {
  const answer = [];

  for (let i = 0; i < progresses.length; i++) {
    const remainingProcess = 100 - progresses[i];
    const speed = speeds[i];

    let time = Math.floor(remainingProcess / speed);
    time = remainingProcess % speed > 0 ? time + 1 : time;

    const last = answer[answer.length - 1];
    if (answer.length === 0 || last[TIME_INDEX] < time) {
      answer.push([1, time]);
      continue;
    }

    answer[answer.length - 1] = [last[COUNT_INDEX] + 1, last[TIME_INDEX]];
  }

  return answer.map(([count, _]) => count);
}

// #2 Queue를 활용한 방법
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = null;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (this.first === null) return false;
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = holdingPointer.next;
    this.length--;
    return holdingPointer;
  }
  isEmpty() {
    return this.length === 0;
  }
}

function solution2(progresses, speeds) {
  var answer = [];
  const queue = new Queue();

  progresses.forEach((value, index) => {
    let time = Math.ceil((100 - value) / speeds[index]);
    queue.enqueue(time);
  });

  let cnt = 1;
  let time = queue.dequeue().value;
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (time < node.value) {
      answer.push(cnt);
      if (node.next) {
        time = node.value;
        cnt = 1;
      } else {
        answer.push(1);
      }
    } else {
      cnt++;
      if (!node.next) answer.push(cnt);
    }
  }

  return answer;
}
