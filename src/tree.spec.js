import { binaryTree } from "./tree";

describe("binary tree", () => {
  let tree = new binaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let root = tree.getrootnode();

  test("make tree", () => {
    expect(root.value).toStrictEqual(5);
  });

  test("search positive", () => {
    expect(tree.binarySearch(7, root).result).toStrictEqual(true);
    expect(tree.binarySearch(7, root).node).toBe(root.rightchild);
  });

  test("search negative", () => {
    expect(tree.binarySearch(111, root)).toStrictEqual(false);
  });

  test("successor", () => {
    let successor = tree.successor(root);
    expect(successor.value).toStrictEqual(6);
    expect(successor).toStrictEqual(tree.binarySearch(6, root).node);
    expect(successor).toStrictEqual(root.rightchild.leftchild);
  });

  test("delete", () => {
    expect(tree.delete(6)).toStrictEqual(true);
  });

  test("depth", () => {
    expect(tree.depth(root.leftchild.rightchild.rightchild, root)).toStrictEqual(3);
  });

  test("height", () => {
    expect(tree.height()).toStrictEqual(3);
  });
});
