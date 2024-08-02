class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;

  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val)
      return this;
    }

    let currentNode = this.root

    while (true) {
      if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = new Node(val)
          return this;
        } else {
          currentNode = currentNode.right
        }
      }

      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = new Node(val)
          return this;
        } else {
          currentNode = currentNode.left
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (this.root === null) {
      this.root = new Node(val)
      return this;
    }

    if (val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = new Node(val)
        return this;
      } else {
        return this.insertRecursively(val, currentNode.right)
      }
    }

    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new Node(val)
        return this;
      } else {
        return this.insertRecursively(val, currentNode.left)
      }
    }
  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  findIteratively(val) {
    let currentNode = this.root

    while (true) {
      if (val === currentNode.val) return currentNode

      if (val > currentNode.val) {
        if (currentNode.right === null) {
          return undefined;
        } else {
          currentNode = currentNode.right
        }
      }

      if (val < currentNode.val) {
        if (currentNode.left === null) {
          return undefined;
        } else {
          currentNode = currentNode.left
        }
      }
    }
  }


  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (currentNode.val === null) return undefined

    if (val > currentNode.val) {
      if (currentNode.right === null) return undefined;
      return this.findRecursively(val, currentNode.right)
    }

    if (val < currentNode.val) {
      if (currentNode.left === null) return undefined;
      return this.findRecursively(val, currentNode.left)
    }

    return currentNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
 * Return an array of visited nodes. */

  dfsPreOrder(currentNode = this.root, arr = []) {
    arr.push(currentNode.val)

    if (currentNode.left) this.dfsPreOrder(currentNode.left, arr)
    if (currentNode.right) this.dfsPreOrder(currentNode.right, arr)

    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
 * Return an array of visited nodes. */

  dfsInOrder(currentNode = this.root, arr = []) {

    if (currentNode.left) this.dfsInOrder(currentNode.left, arr)

    arr.push(currentNode.val)

    if (currentNode.right) this.dfsInOrder(currentNode.right, arr)

    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
 * Return an array of visited nodes. */

  dfsPostOrder() {
    let node = this.root
    let arr = []

    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left)

      if (currentNode.right) traverse(currentNode.right)

      arr.push(currentNode.val)
    }

    traverse(node)

    return arr;
  }

  /** bfs(): Traverse the array using BFS.
 * Return an array of visited nodes. */

  bfs() {
    let currentNode = this.root
    let queue = []
    let arrOfData = []

    queue.push(currentNode)

    while (queue.length) {
      currentNode = queue.shift()

      arrOfData.push(currentNode.val)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }

    return arrOfData;
  }
}

module.exports = BinarySearchTree;

