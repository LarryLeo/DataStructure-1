class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}
class BST{
    constructor() {
        this.root = null;
    }
    insert(data) {
        const node = new Node(data);
        if(this.root === null) {
            this.root = node;
            return
        };
        let current = this.root;
        while(true) {
            if(data > current.data) {
                if(current.left === null) {
                    current.left = node;
                    return
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = node;
                    return
                }
                current = current.right;
            }
        }
    }
}