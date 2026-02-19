import { Tree } from "./index.js";

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
      return;
    }
  
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
  

  const binaryTree  = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

  console.log(binaryTree.includes(67));
 // console.log(binaryTree.includes(0));
  //console.log(binaryTree.includes(3));
  console.log(binaryTree.insert(11));

  console.log(binaryTree.includes(11));



  const root = binaryTree.getRoot();

  prettyPrint(root);