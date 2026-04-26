class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    // Insert (Level Order to keep tree balanced-ish)
    insert(value: T): void {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        const queue: (TreeNode<T> | null)[] = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            if (current) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                } else {
                    queue.push(current.left);
                }

                if (!current.right) {
                    current.right = newNode;
                    return;
                } else {
                    queue.push(current.right);
                }
            }
        }
    }

    // Inorder Traversal (Left → Root → Right)
    inorder(node: TreeNode<T> | null = this.root): void {
        if (node) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    // Preorder Traversal (Root → Left → Right)
    preorder(node: TreeNode<T> | null = this.root): void {
        if (node) {
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Postorder Traversal (Left → Right → Root)
    postorder(node: TreeNode<T> | null = this.root): void {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }

    // Level Order Traversal (BFS)
    levelOrder(): void {
        if (!this.root) return;

        const queue: (TreeNode<T> | null)[] = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();

            if (current) {
                console.log(current.value);

                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
        }
    }
}