
import { binaryTree } from "./tree.js";

let tree = new binaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9]);

tree.print();

tree.insert(11, tree.getrootnode());

tree.print();

tree.insert(-1, tree.getrootnode());

tree.print();
