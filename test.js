import { Tree } from "./index.js";

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
      return;
    }
  
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
  

  function getrndInterger(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
  }

function buildRandomArray() {
  const newArray = [];
  const arrayLength = 15;

  

  for (let i = 0; i < arrayLength; i++) {
    newArray.push(getrndInterger(100, 0));
  }
  return newArray;

}
  
  const binaryTree  = new Tree(buildRandomArray());

  console.log(binaryTree);

  //console.log(binaryTree.isBalanced());

  /*binaryTree.postOrderForEach((value) => {
    console.log(value);
  })

  binaryTree.inOrderForEach((value) => {
    console.log(value);
  })*/

  binaryTree.preOrderForEach((value) => {
    console.log(value);
  })

  binaryTree.insert(120);
  binaryTree.insert(110);
  binaryTree.insert(130);
  binaryTree.insert(110);
  binaryTree.insert(140);
  binaryTree.insert(111);
  binaryTree.insert(112);
  binaryTree.insert(103);


  //console.log(binaryTree.includes(67));
 // console.log(binaryTree.includes(0));
  //console.log(binaryTree.includes(3));
  //console.log(binaryTree.insert(11));

  //console.log(binaryTree.includes(11));



  const root = binaryTree.getRoot();

  prettyPrint(root);

  console.log(binaryTree.isBalanced());

  console.log(binaryTree.rebalance());

  prettyPrint(root);

  console.log(binaryTree.isBalanced());

  binaryTree.inOrderForEach((value) => {
    console.log(value);
  })



