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


export const breadthFirstValuesIterative = (root: INode | null) => {
    // O(n)
    let result = [];
    let queue = [root];

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

export const breadthFirstValuesRecursive = (root: INode | null) => {

    let result: Array<INode> = [];
    const recursiveCall = (root: INode | null, level: number) => {
        if (root !== null) {
            if (level === 0) {
                result.push(root);
            }
            if (root.left) recursiveCall(root.left, level - 1);
            if (root.right) recursiveCall(root.right, level - 1);
        }
    }

    for (let i = 0; i < 3; i++) {
        recursiveCall(root, i);
    }
    return result;
}

export const breadthSearchValueIterative = (root: INode | null, val: number): Boolean => {
    // O(n)
    if (root === null) return false;

    let queue = [root];
    while (queue.length !== 0) {
        let varNode = queue.shift();
        if (varNode?.data === val) return true

        if (varNode?.left) queue.push(varNode.left);
        if (varNode?.right) queue.push(varNode.right);
    }
    return false;
}

export const depthSearchValueRecursive = (root: INode | null, val: number): Boolean => {
    if (root === null) return false;
    if (root.data === val) return true;
    const leftValues: Boolean = depthSearchValueRecursive(root.left, val);
    const rightValues: Boolean = depthSearchValueRecursive(root.right, val);
    return leftValues || rightValues;
}