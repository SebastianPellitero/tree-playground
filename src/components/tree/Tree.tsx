export function Tree(this: { root: INode | null }) {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

interface INode {
    data: Number;
    count: Number;
    left: INode | null;
    right: INode | null;
    show(): Number;
}

class Node {
    data: Number;
    count: Number;
    left: INode | null;
    right: INode | null;
    // show(): Number;

    Node(data: Number, left: INode | null, right: INode | null) {
        this.data = data;
        this.count = 1;
        this.left = left;
        this.right = right;
    }

    // show = () => {
    //     return data;
    // };
}

// function Node(this: INode, data: Number, left: INode | null, right: INode | null) {
//     this.data = data;
//     this.count = 1;
//     this.left = left;
//     this.right = right;

//     this.show = () => {
//         return data;
//     };
// }

function insert(data: Number) {
    const n = new Node(data, null, null);

    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
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
}

function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        putstr(node.show() + ' ');
        inOrder(node.right);
    }
}
