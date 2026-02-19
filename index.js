export class Node {
    constructor(data=null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


export class Tree {
    constructor(array) {
        this.size = 0;
        this.array = array;
        

        const sortedArray = this.array.toSorted((a, b) => {
            return a - b;
        });

        const uniqueSetObj = new Set(sortedArray);

        const uniqueArray = [...uniqueSetObj];

        this.root = this.#buildTree(uniqueArray, 0, uniqueArray.length - 1);
    }

    #buildTree(array, start, end) {
        //array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

        if (start > end) {
            return null;
        }


        const mid = Math.floor((start + end) / 2);

        const newNode = new Node(array[mid]);
        this.size++;

        newNode.left = this.#buildTree(array, start, mid - 1);


        newNode.right = this.#buildTree(array, mid + 1, end);

        return newNode;

    } 

    getRoot() {
        //console.log(this.root);
        return this.root;
    }

    //includes(value) function that accepts a value and returns true if the given value is in the tree.
    // If the value isn’t in the tree, it should return false.

    includes(value) {

        const rootNode = this.getRoot();

        if (rootNode === null || rootNode === undefined) {
            return false;
        }

        let current = rootNode;

        while(current !== null) {
            if (current.data === value) {
                return true;

            }

            if (value < current.data) {
                current = current.left;
            }else {
                current = current.right;
            }
        }
        return false;
    }

    //insert(value) function that accepts a value and inserts a new node with that value into the tree

    insert(value) {
        const rootNode = this.getRoot();
        if (rootNode === null || rootNode === undefined) {
            const newNode = new Node(value);
            this.root = newNode;
            this.size++;
            return;
        }

        let current = rootNode;

        while(current !== null) {
            if (current.data === value) {
                return;
            }

            if (value < current.data) {
                
                if ( current.left === null) {
                    const newNode = new Node(value);
                    current.left  = newNode;
                    this.size++;
                }
                current = current.left;


            }else {
                if (current.right === null) {
                    const newNode = new Node(value);
                    current.right = newNode;
                    this.size++;
                }
                current = current.right;

            }
        }
    }

    //Write a deleteItem(value) function that accepts a value and removes it from the tree.
    deleteItem(root, value) {

        function getSuccessor(curr) {

            curr = curr.right;
            while (curr !== null && curr.left !== null) {
                curr = curr.left;
                
            }
            return curr;
        }

        root = this.root;

        if (root === null || root === undefined) {
            return ;
        }
        
        if (value < root.data) {
            data.left = this.deleteItem(data.left, value);

        }else if (value > root.data) {
            data.right = this.deleteItem(data.right, value);
        }else {
            if (root.left === null)
                return root.right;
            if (root.right === null)
                return root.left;

            const successor = getSuccessor(root);

             root.data = successor.data;

             root.right = delNode(root.right, successor.data);
    
        }
        return root

    }

    //Write a levelOrderForEach(callback) function that accepts a callback function as its parameter
    //levelOrderForEach() should traverse the tree in breadth-first level order 
    // and call the callback on each value as it traverses, 
    // passing each value (not the nodes) as an argument, similarly to how Array.prototype.forEach() might work for arrays

    levelOrderForEach(callback) {

        if (!callback) {
            throw new Error("callback function is required");
        }
        const queue = [this.root];

    
        while (queue.length !== 0) {
            const currentNode = queue.shift();
            callback(currentNode.data);

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
            
        }


    }

    inOrderForEach(callback) {
        if (!callback) {
            throw new Error("callback function is required");
        }
        this.#inOrder(this.root, callback);
    }

    #inOrder(node, callback) {
        if (node === null) {
            return;
        }

        this.#inOrder(node.left, callback);

        callback(node.data);

        this.#inOrder(node.right, callback);


    }

    preOrderForEach(callback) {
        if (!callback) {
            throw new Error("callback function is required");
        }
        this.#preOrder(this.root, callback);
    }

    #preOrder(node, callback) {
        if (node === null) {
            return;
        }

        callback(node.data);

        this.#preOrder(node.left);
        this.#preOrder(node.right);
    }


    postOrderForEach(callback) {
        if (!callback) {
            throw new Error("callback function is required");
        }
        this.#postOrder(this.root, callback);

    }

    #postOrder(node, callback) {
        if (node === null) {
            return;
        }

        this.#postOrder(node.left, callback);

        this.#postOrder(node.right, callback);

        callback(node.data);

    }

    //Write a height(value) function that returns the height of the node containing the given value.
    // Height is defined as the number of edges in the longest path from that node to a leaf node.
    // If the value is not found in the tree, the function should return undefined.

    height(value) {
        if (this.root === null) {
            return;
        }

        let count = 0;
        let current = this.root;

        while(current !== null) {
            if (value === current.data) {
                count++;
                return count;
            } else if (value < current.data) {
                current = current.left;
            }else {
                current = current.right;
            }
        }
    }
}