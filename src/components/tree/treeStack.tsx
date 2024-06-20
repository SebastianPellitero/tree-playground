import { INode } from "./treeNode";

export class Stack {
    array: Array<INode | null> = [];

    constructor(node: INode | null = null) {
        this.array = [node];
    }

    push = (value: INode) => {
        this.array = [value, ...this.array];
    }

    pop = () => {
        let result = this.array[0];
        this.array = this.array.slice(1);
        return result;
    }

    top = () => {
        return this.array[0] || null;
    }

    printStack = () => {
        return this.array.map((nodes) => console.log(nodes));
    }

    isEmpty = () => {
        return !this.array.length;
    }
}