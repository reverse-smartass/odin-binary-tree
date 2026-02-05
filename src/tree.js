import { node } from "./node.js";

export class binaryTree {
  #rootnode;

  constructor(arr) {
    {
      this.#rootnode = this.buildTree(arr, 0, arr.length - 1);
    }
  }

  print() {
    this.#prettyPrint(this.#rootnode);
  }

  #prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null || node === undefined) {
      return;
    }

    this.#prettyPrint(
      node.rightchild,
      `${prefix}${isLeft ? "│   " : "    "}`,
      false,
    );
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    this.#prettyPrint(
      node.leftchild,
      `${prefix}${isLeft ? "    " : "│   "}`,
      true,
    );
  }

  getrootnode() {
    return this.#rootnode;
  }

  buildTree(arr, start, end) {
    if (start > end) {
      return;
    }

    let middle = start + Math.floor((end - start) / 2);

    let root = new node(arr[middle]);

    root.leftchild = this.buildTree(arr, start, middle - 1);
    root.rightchild = this.buildTree(arr, middle + 1, end);

    return root;
  }

  binarySearch(value, node) {
    if (this.#rootnode === null || this.#rootnode === undefined || !node) {
      return false;
    }

    if (value === node.value) return { result: true, node };

    if (value > node.value) {
      return this.binarySearch(value, node.rightchild);
    } else {
      return this.binarySearch(value, node.leftchild);
    }
  }

  insert(value, currentNode = this.#rootnode) {
    if (this.#rootnode === null || this.#rootnode === undefined) {
      this.#rootnode = new node(value);
      return;
    }

    if (value > currentNode.value) {
      if (!currentNode.rightchild) {
        currentNode.rightchild = new node(value);
        return;
      } else {
        return this.insert(value, currentNode.rightchild);
      }
    }

    if (value < currentNode.value) {
      if (!currentNode.leftchild) {
        currentNode.leftchild = new node(value);
        return;
      } else {
        return this.insert(value, currentNode.leftchild);
      }
    }
    return;
  }

  //delete successor node and return the value
  successor(node) {
    let s;
    if (node.rightchild) {
      s = node.rightchild;
    } else {
      return undefined;
    }

    while (s && s.leftchild) {
      s = s.leftchild;
    }
    return s;
  }

  delete(value) {
    let search = this.binarySearch(value);
    if (search.result) {
      let successor = this.successor(search.node);
      search.node.value = successor.value;
      this.delete(successor);
    }
    return null;
  }
}
