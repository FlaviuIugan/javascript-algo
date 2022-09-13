class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentRoot = this.root;

      while (true) {
        if (value > currentRoot.val) {
          if (!currentRoot.right) {
            currentRoot.right = newNode;
            return this;
          } else {
            currentRoot = currentRoot.right;
          }
        } else if (value < currentRoot.val) {
          if (!currentRoot.left) {
            currentRoot.left = newNode;
            return this;
          } else {
            currentRoot = currentRoot.left;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;

    let currentRoot = this.root;

    while (currentRoot) {
      if (currentRoot.val === val) {
        return true;
      } else if (currentRoot.val > val) {
        currentRoot = currentRoot.left;
      } else if (currentRoot.val < val) {
        currentRoot = currentRoot.right;
      }
    }

    return false;
  }

  // tree traversal

  // horizontal approach
  breath_first_search() {
    if (!this.root) return undefined;

    let currentRoot = this.root;

    let data = [];

    let queue = [];
    queue.push(currentRoot);

    while (queue.length) {
      let node = queue.shift();
      data.push(node.val);
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }

    console.log(data);
  }

  depth_first_preOrder() {
    if (!this.root) return undefined;

    let currentRoot = this.root;
    let result = [];

    function traverse(node) {
      result.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(currentRoot);
    return result;
  }

  depth_first_postOrder() {
    if (!this.root) return undefined;

    let currentRoot = this.root;
    let result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.val);
    }

    traverse(currentRoot);

    return result;
  }

  depth_first_inOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    console.log(data);
  }
}

const test = new BST();

test.insert(10);
test.insert(6);
test.insert(15);
test.insert(3);
test.insert(8);
test.insert(20);

test.depth_first_inOrder();
console.log(test);
