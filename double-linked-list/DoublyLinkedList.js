class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a new Node at the end of the DLL

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  // remove a node situated at the end of DLL
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return this;
    }

    let currentHead = this.head;
    let prev;
    while (currentHead.next) {
      prev = currentHead;
      currentHead = currentHead.next;
    }
    this.tail = prev;
    prev.next = null;
    this.length--;
    return this;
  }

  //remove a element from  the start

  shift() {
    if (!this.head) return undefined;
    let newHead = this.head.next;
    this.head = newHead;
    newHead.prev = null;
    this.length--;
    return this;
  }

  // add a new node to the start of the dll

  unshift(val) {
    if (!this.head) {
      this.push(val);
      return this;
    }

    const newNode = new Node(val);

    let currentHead = this.head;
    currentHead.prev = newNode;
    this.head = newNode;
    newNode.next = currentHead;
    this.length++;
    return this;
  }

  set(index, val) {
    if (!this.head) return undefined;

    let count = 0;
    let currentHead = this.head;

    if (index === 0) {
      this.head.val = val;
      return this;
    }

    if (index === this.length - 1) {
      this.tail.val = val;
      return this;
    }

    while (currentHead) {
      if (index === count) {
        currentHead.val = val;
        return this;
      }
      count++;
      currentHead = currentHead.next;
    }
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }

    let count = 0;
    let currentHead = this.head;
    while (currentHead) {
      if (count === index) {
        return currentHead;
      }
      count++;
      currentHead = currentHead.next;
    }

    return undefined;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    const newNode = new Node(val);
    let currentHead = this.head;
    if (index === 0) {
      currentHead.prev = newNode;
      this.head = newNode;
      newNode.prev = null;
      newNode.next = currentHead;
      this.length++;
      return this;
    }
    if (index === this.length - 1) {
      let prevTail = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      newNode.prev = prevTail;
      this.length++;
      return this;
    }

    let count = 0;
    while (currentHead) {
      if (count === index) {
        // console.log(currentHead);
        let prev = currentHead.prev;
        prev.next = newNode;
        newNode.next = currentHead;
        newNode.prev = prev;
        this.length++;
        return this;
      }
      count++;
      currentHead = currentHead.next;
    }
  }

  // to-do
  remove(index) {
    if (index < 0 && index > this.length - 1) {
      return undefined;
    }
  }
}

const test = new DoublyLinkedList();
test.push(1);
test.push(2);
test.push(3);
test.push(4);
test.insert(2, "test");
console.log(test);
