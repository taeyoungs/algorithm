// #1
const PRIORITY_INDEX = 0;

function solution1(priorities, location) {
  let count = 1;

  const sortedPriorities = priorities.slice().sort((a, b) => a - b);
  const priorityWithLocation = priorities.map((priority, index) => [priority, index]);

  while (true) {
    const [priority, index] = priorityWithLocation.shift();

    if (sortedPriorities[sortedPriorities.length - 1] === priority) {
      if (index === location) {
        return count;
      }

      count = count + 1;
      sortedPriorities.pop();
    }

    priorityWithLocation.push([priority, index]);
  }
}

// #2

class Node {
  constructor(value, idx) {
    this.value = value;
    this.idx = idx;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value, idx) {
    const newNode = new Node(value, idx);
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
    if (this.first === this.last) this.last = null;
    const holdingPointer = this.first;
    this.first = holdingPointer.next;
    return holdingPointer;
  }
  check(dequeuedNode) {
    if (this.first === null) return false;
    if (this.first === this.last) return dequeuedNode.value < this.first.value;
    let flag = false;
    let node = this.first;
    while (node.next) {
      if (dequeuedNode.value < node.value) flag = true;
      node = node.next;
    }
    return flag;
  }
}

function solution2(priorities, location) {
  var answer = 0;

  const queue = new Queue();
  priorities.forEach((value, index) => {
    queue.enqueue(value, index);
  });
  let node = null;
  while (true) {
    node = queue.dequeue();
    if (queue.check(node)) {
      queue.enqueue(node.value, node.idx);
    } else {
      answer++;
      if (node.idx === location) return answer;
    }
  }
}
