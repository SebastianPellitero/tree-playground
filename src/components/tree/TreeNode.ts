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

class Tree {
    root: INode | null;
    count: number;
    left: INode | null;
    right: INode | null;

    constructor(root: INode | null) {
        this.root = root;
    }

    insert = (data: number) => {
        const n = new TreeNode(data, null, null);
        if (this.root === null) {
            this.root = n;
            console.log("entra una vez aca", n);
        } else {
            let current: INode | null = this.root;
            console.log(n);
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

    // inOrder = (node: INode | null = this.root): JSX.Element => {
    //     if (node !== null) {
    //         console.log('entra algo aca?')
    //         this.inOrder(node.left);
    //         //console.log(node.show() + " ");
    //         this.inOrder(node.right);
    //         //return <RTreeNode data={this.root.data} left={this.root.left} right={this.root.right} />
    //         <div>{ node.data } < /div>
    //     }
    // };
}