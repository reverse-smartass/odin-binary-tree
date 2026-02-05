import { binaryTree } from "./tree";

describe("binary tree", () => {
  let tree = new binaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let root = tree.getrootnode();

  test("make tree", () => {
    expect(root.value).toStrictEqual(5);
  });

  test("search positive", () => {
    expect(tree.binarySearch(7, root).result).toStrictEqual(true);
  });

  test("search negative", () => {
    expect(tree.binarySearch(111, root)).toStrictEqual(false);
  });

  test("successor", () => {
    expect(tree.successor(root).value).toStrictEqual(6);
    expect(tree.successor(root)).toStrictEqual(tree.binarySearch(6, root).node);
  });
});
