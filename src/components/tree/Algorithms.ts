import { Stack } from "./Stack";
import { INode } from "./TreeNode";

export const depthFirstValuesRecursive = (root: INode | null): Array<INode> => {
    if (root === null) return [];
    const leftValues: INode[] = depthFirstValuesRecursive(root.left);
    const rightValues: INode[] = depthFirstValuesRecursive(root.right);
    return [root, ...leftValues, ...rightValues];
}


export const depthFirstValuesIterative = (root: INode | null) => {
    let result: Array<INode> = [];
    let stack = new Stack(root);

    while (!stack.isEmpty()) {
        let varNode = stack.pop();
        if (varNode) {
            if (varNode.right) stack.push(varNode.right);
            if (varNode.left) stack.push(varNode.left);
            result.push(varNode);
        }
    }
    return (result);
};


// export const breadthFirstValues = () => {

// }