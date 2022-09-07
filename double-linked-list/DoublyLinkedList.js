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

  set(index, val) {}

  get(index) {}

  insert() {}
  remove() {}
}

const test = new DoublyLinkedList();
test.push(1);
test.push(2);
test.push(3);
test.push(4);
test.unshift("A");
console.log(test);
