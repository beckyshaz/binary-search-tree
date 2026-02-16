class Node {
    constructor(value=null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor(array = []) {
        this.array = array;
        console.log(this.array);
        

        const sortedArray = this.array.toSorted((a, b) => {
            return a - b;
        });

        console.log(sortedArray);

        const uniqueSetObj = new Set(sortedArray);

        console.log(uniqueSetObj);

        const uniqueArray = [...uniqueSetObj];

        console.log(uniqueArray);

        this.root = this.#buildTree(uniqueArray, 0, uniqueArray.length - 1);
    }

    #buildTree(array, start, end) {
        //array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

        if (start > end) {
            return null;
        }


        const mid = Math.floor((start + end) / 2);

        const newNode = new Node(uniqueArray[mid]);

        newNode.left = this.#buildTree(array, start, mid - 1);


        newNode.right = this.#buildTree(array, mid + 1, array.length - 1);

        return newNode;

    }
}