import { useEffect } from "react";

import { amountOfUniqueTrees, breadthFirstValuesIterative, breadthFirstValuesRecursive, breadthSearchValueIterative, depthFirstValuesIterative, depthSearchValueRecursive, getMaximumDepth, inOrderTransversalIterative, inOrderTransversalRecursive, isInTreeRecursive, isSortedTreeValidationRecursive, isTheSameTreeRecursive, isTreeSimetricRecursive, maxRouteSumIterative, maxRouteSumRecursive, minValueTreeIterative, minValueTreeRecursive, optimalSearchBreadthFirst, optimalSearchValueRecursive, sumTreeIterative, sumTreeRecursive } from "./Algorithms";
import { Tree, TreeNode } from "./TreeNode";

export const TreeNodeComponent: any = () => {

    useEffect(() => {

        const elArbol = new Tree();
        elArbol.createTreeFromArray([1, 2]);
        const elArbol2 = new Tree();
        elArbol2.createTreeFromArray([1, 2, null]);
        const elArbol3 = new Tree();
        elArbol3.createTreeFromArray([2, 1, 1, 5, 1, 1, 5, null, 4]);

        const ordererTree = new Tree();
        ordererTree.insertInOrder(20);
        ordererTree.insertInOrder(15);
        ordererTree.insertInOrder(25);
        ordererTree.insertInOrder(10);
        ordererTree.insertInOrder(50);
        ordererTree.insertInOrder(49);
        ordererTree.insertInOrder(48);
        ordererTree.insertInOrder(47);
        ordererTree.insertInOrder(46);
        ordererTree.insertInOrder(1);
        ordererTree.insertInOrder(60);
        ordererTree.insertInOrder(70);

        //console.log(elArbol3.printTree());
        //console.log(getMaximumDepth(elArbol.root));

        console.log(amountOfUniqueTrees(5));

    }, []);

    return (
        <div>

        </div>
    )
};
