import { binaryTree } from "./tree";

describe("binary tree", () => {

  let tree = new binaryTree([1,2,3,4,5,6,7,8,9]);
  
  test("make tree", () => {
    tree.print();
    expect(tree.getrootnode().value).toStrictEqual(5);
  });
  
});