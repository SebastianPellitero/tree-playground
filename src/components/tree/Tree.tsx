import { useEffect } from "react";

import { breadthFirstValuesIterative, breadthFirstValuesRecursive, breadthSearchValueIterative, depthFirstValuesIterative, depthSearchValueRecursive, maxRouteSumIterative, maxRouteSumRecursive, minValueTreeIterative, minValueTreeRecursive, sumTreeIterative, sumTreeRecursive } from "./Algorithms";
import { Tree, TreeNode } from "./TreeNode";

export const TreeNodeComponent: any = () => {

    useEffect(() => {
        const elarbol = new TreeNode(25);
        elarbol.left = new TreeNode(10);
        elarbol.right = new TreeNode(40);
        elarbol.left.left = new TreeNode(5);
        elarbol.left.right = new TreeNode(15);
        elarbol.right.right = new TreeNode(45);

        //console.log(maxRouteSumRecursive(elarbol));
        const elOtroArbol = new Tree();
        elOtroArbol.insertInOrder(25);
        elOtroArbol.insertInOrder(40);
        elOtroArbol.insertInOrder(10);
        elOtroArbol.insertInOrder(45);
        elOtroArbol.insertInOrder(30);
        elOtroArbol.insertInOrder(5);
        elOtroArbol.insertInOrder(15);
        console.log(elOtroArbol.printTree());

    }, []);

    return (
        <div>

        </div>
    )
};
