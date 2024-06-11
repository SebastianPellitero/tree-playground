export interface INode {
    data: number;
    count: number;
    left: INode | null;
    right: INode | null;
    show(): number;
}

export class TreeNode {
    data: number;
    count: number;
    left: INode | null;
    right: INode | null;

    constructor(data: number, left: INode | null = null, right: INode | null = null) {
        this.data = data;
        this.count = 1;
        this.left = left;
        this.right = right;
    }

    show = () => {
        return this.data;
    };
}

export class Tree {
    root: INode | null;

    constructor(root: INode | null = null) {
        this.root = root;
    }

    insertInOrder = (data: number) => {
        const n = new TreeNode(data);
        if (this.root === null) {
            this.root = n;
        } else {
            let current: INode | null = this.root;
            let parent: INode | null;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    };

    createTreeFromArray = (treeArray: Array<number | null>) => {
        if (!treeArray || treeArray[0] === null) return 0;
        let _treeArray = treeArray;
        const rootNode = new TreeNode(_treeArray.shift()!);
        this.root = rootNode;
        let queue = [rootNode];

        while (queue.length !== 0) {
            let treeNode = queue.shift();
            let nodeValueLeft = _treeArray.shift();
            if (nodeValueLeft) {
                treeNode!.left = new TreeNode(nodeValueLeft);
                queue.push(treeNode!.left);
            }
            let nodeValueRight = _treeArray.shift();
            if (nodeValueRight) {
                treeNode!.right = new TreeNode(nodeValueRight)
                queue.push(treeNode!.right);
            }
        }
    }

    printTree = () => {
        let result = [];
        let queue = [this.root];

        while (queue.length !== 0) {
            let varNode = queue[0];
            queue = queue.slice(1);
            if (varNode) {
                if (varNode.left) queue.push(varNode.left);
                if (varNode.right) queue.push(varNode.right);
                result.push(varNode);
            }
        }
        return result;
    }

    removeNode(node: INode | null, data: number) {
        if (node === null) {
            return null;
        }
        if (data === node.data) {
            // node has no children
            if (node.left === null && node.right === null) return null;
            //node has no children left
            if (node.left === null) return node.right;
            //node has no children right
            if (node.right === null) return node.left;
            //node has two children
            var tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }

        function getSmallest(node: INode) {
            if (node.left === null) {
                return node;
            } else return getSmallest(node.left);
        }
    }
}