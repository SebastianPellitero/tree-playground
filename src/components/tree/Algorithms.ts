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
            if (varNode.left) stack.push(varNode.left);
            if (varNode.right) stack.push(varNode.right);
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
        //or let varNode = queue.shift();
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

export const optimalSearchBreadthFirst = (root: INode | null, val: number): Boolean => {
    if (root === null) return false;
    let queue = [root];
    while (queue.length !== 0) {
        let varNode = queue.shift();
        if (varNode?.data === val) return true
        if (varNode?.data > val) {
            if (varNode?.left) queue.push(varNode.left);
        } else {
            if (varNode?.right) queue.push(varNode.right);
        }
    }
    return false;
}

export const optimalSearchValueRecursive = (root: INode | null, val: number): boolean => {
    if (root === null) return false;
    if (root.data === val) return true;

    if (root.data > val) return optimalSearchValueRecursive(root.left, val);
    else return optimalSearchValueRecursive(root.right, val);
}

export const depthSearchValueRecursive = (root: INode | null, val: number): Boolean => {
    if (root === null) return false;
    if (root.data === val) return true;
    const leftValues: Boolean = depthSearchValueRecursive(root.left, val);
    const rightValues: Boolean = depthSearchValueRecursive(root.right, val);
    return leftValues || rightValues;
}

export const sumTreeRecursive = (root: INode | null): number => {
    //O(n)
    if (root === null) return 0;
    return root?.data + sumTreeRecursive(root.left) + sumTreeRecursive(root.right);
}

export const sumTreeIterative = (root: INode | null): number => {
    if (root === null) return 0;
    let queue = [root];
    let sumatory = 0;
    while (queue.length !== 0) {
        let varNode = queue.shift();
        sumatory += varNode!.data;

        if (varNode?.left) queue.push(varNode.left);
        if (varNode?.right) queue.push(varNode.right);
    }
    return sumatory;
}

export const minValueTreeRecursive = (root: INode | null): number => {
    if (root === null) return Infinity;
    const leftMin: number = minValueTreeRecursive(root.left);
    const rightMin: number = minValueTreeRecursive(root.right);
    return Math.min(root.data, leftMin, rightMin)
}

export const minValueTreeIterative = (root: INode | null): number => {
    // O(n)
    if (root === null) return Infinity;
    let minValue = Infinity;
    let queue = [root];
    while (queue.length !== 0) {
        let varNode = queue.shift();
        if (varNode!.data < minValue) minValue = varNode!.data;

        if (varNode?.left) queue.push(varNode.left);
        if (varNode?.right) queue.push(varNode.right);
    }
    return minValue;
}

export const maxRouteSumIterative = (root: INode | null): number => {
    if (root === null) return Number.NEGATIVE_INFINITY;
    let maxSum = Number.NEGATIVE_INFINITY;

    let stack = new Stack(root);
    while (!stack.isEmpty()) {
        let varNode = stack.pop();
        if (varNode!.data > maxSum) maxSum = varNode!.data;

        if (varNode?.left) stack.push(varNode.left);
        if (varNode?.right) stack.push(varNode.right);

    }
    return maxSum;
}

export const maxRouteSumRecursive = (root: INode | null): number => {
    if (root === null) return 0;
    const leftMax: number = maxRouteSumRecursive(root.left);
    const rightMax: number = maxRouteSumRecursive(root.right);
    return Math.max(root.data + leftMax, root.data + rightMax);

    // if (root === null) return -Infinity;
    // if(root.left === null && root.right === null) return root.data;
    // const maxChildPathSum = Math.max(maxChildPathSum(root.left), maxChildPathSum(root.right));
    // return root.data + maxChildPathSum;
}

export const inOrderTransversalIterative = (root: INode | null) => {
    let result: Array<INode> = [];
    let current = root;
    let stack = [];

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop()!;
        result.push(current);
        current = current!.right
    }
    return (result);
}

export const inOrderTransversalRecursive = (root: INode | null) => {
    if (root === null) return [];
    const leftValues: INode[] = inOrderTransversalRecursive(root.left);
    const rightValues: INode[] = inOrderTransversalRecursive(root.right);
    return [...leftValues, root, ...rightValues];
}

export const isInTreeRecursive = (root: INode | null, value: number): boolean => {
    if (root === null) return false;
    if (root.data === value) return true;
    const leftValues: boolean = isInTreeRecursive(root.left, value);
    const rightValues: boolean = isInTreeRecursive(root.right, value);
    return leftValues || rightValues;
}

export const isTheSameTreeRecursive = (root: INode | null, root2: INode | null): boolean => {
    if (root === null && root2 === null) return true;
    if (root !== null && root2 !== null && root.data === root2?.data) return true && isTheSameTreeRecursive(root.left, root2.left) && isTheSameTreeRecursive(root.right, root2.right)
    return false;

}

export const isTreeSimetricRecursive = (root: INode | null) => {
    if (root === null) return false;
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;

    const isSimetricRecursive = (root: INode | null, root2: INode | null): boolean => {
        if (root === null && root2 === null) return true;
        if (root !== null && root2 !== null && root.data === root2?.data) return true && isSimetricRecursive(root.left, root2.right) && isSimetricRecursive(root.right, root2.left)
        return false;
    }

    return isSimetricRecursive(root.left, root.right);
}

export const isSortedTreeValidationRecursive = (root: INode | null) => {

    const optimalSearchValueRecursive = (root: INode | null, val: number): boolean => {
        if (root === null) return false;
        if (root.data === val) return true;

        if (root.data > val) return optimalSearchValueRecursive(root.left, val);
        else return optimalSearchValueRecursive(root.right, val);
    }

    let queueTree: Array<number> = [];
    let result = true;
    let queue = [root];

    while (queue.length !== 0 && result) {
        let varNode = queue.shift();
        if (varNode) {
            if (varNode.left) queue.push(varNode.left);
            if (varNode.right) queue.push(varNode.right);
            if (queueTree.includes(varNode.data)) result = false
            else {
                queueTree.push(varNode.data);
                result = optimalSearchValueRecursive(root, varNode.data);
            }
        }
    }
    return result;

}

export const getMaximumDepth = (root: INode | null): number => {
    if (root === null) return 0;
    return Math.max(getMaximumDepth(root.left), getMaximumDepth(root.right)) + 1;
}

export const amountOfUniqueTrees = (qnodes: number) => {
    //not working bad aproach
    let subtotal = (subQnodes: number): number => {
        if (subQnodes === 0) return 1;
        if (subQnodes === 1) return 1;
        if (subQnodes === 2) return 2;
        if (subQnodes === 3) return 5;
        let value = 0;
        for (let i = 1; i <= Math.ceil(subQnodes / 2); i++) {
            value += 2 * subtotal(subQnodes - i)
        }
        return value;
    }
    return subtotal(qnodes);
}