class MaxBinaryHeap {
  constructor() {
    this.queue = [];
  }

  bubbleUp() {
    let length = this.queue.length - 1;

    let parentIdx = Math.floor((length - 1) / 2);
    while (this.queue[parentIdx] < this.queue[length]) {
      [this.queue[parentIdx], this.queue[length]] = [
        this.queue[length],
        this.queue[parentIdx],
      ];
      length = parentIdx;
      parentIdx = Math.floor((length - 1) / 2);
    }
  }

  insert(val) {
    this.queue.push(val);
    this.bubbleUp();
  }
  // swap the first value with the last one
  // sink down that bitch until it has found her place
  dequeue() {
    let firstElement = this.queue[0];
    let end = this.queue.pop();
    if (this.queue.length > 0) {
      this.queue[0] = end;
      this.sinkDown();
    }
    return end;
  }

  sinkDown() {
    let idx = 0;
    let length = this.queue.length;
    let element = this.queue[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 1;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.queue[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.queue[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.queue[idx] = this.queue[swap];
      this.queue[swap] = element;
      idx = swap;
    }
  }
}

const test = new MaxBinaryHeap();

test.insert(46);
test.insert(50);
test.insert(55);
test.insert(60);
test.insert(53);
test.insert(43);
test.dequeue();
console.log(test);
