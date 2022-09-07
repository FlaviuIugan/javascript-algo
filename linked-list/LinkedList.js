class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add item to the end of list
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  //pop remove item from the end
  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let prevNode;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = prevNode;
    prevNode.next = null;
    this.length--;
  }

  //shift - remove element from start

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head = newHead;
    }
    this.length--;
  }

  //unshift - add element from start

  unshift(val) {
    if (!this.head) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
      this.length++;
    }
  }

  //set - change node val at index

  set(index, val) {
    let count = 0;
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    let currentHead = this.head;
    while (currentHead) {
      if (count === index) {
        currentHead.val = val;
        return this;
      }

      count++;
      currentHead = currentHead.next;
    }
  }

  //insert - insert new node at index

  insert(index, val) {
    const newNode = new Node(val);
    let count = 1;
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.push(newNode);
    }
    if (index === 0) {
      return this.unshift(val);
    }
    let currentHead = this.head;
    let prevNode;
    while (currentHead.next) {
      prevNode = currentHead;
      currentHead = currentHead.next;
      if (index === count) {
        prevNode.next = newNode;
        newNode.next = currentHead;
        count++;
        this.length++;
        return this;
      }
    }
  }

  //reverse - reversing the linked list

  reverse() {
    if (!this.head) return undefined;

    let currentHead = this.head;

    if (this.length === 1) {
      this.head = this.tail;
      this.tail = currentHead;
      return this;
    }

    this.head = this.tail;
    this.tail = currentHead;
    let node = this.tail;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const test = new LinkedList();
test.push(1);
test.push(2);
test.push(3);
test.push(4);
test.push(5);
test.push(6);

test.reverse();

// 6 - null

//6-  3- 2 - 1

// 1 2 3 4 5 6
