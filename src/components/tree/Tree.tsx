import { useEffect } from "react";

import { breadthFirstValuesIterative, breadthFirstValuesRecursive, breadthSearchValueIterative, depthFirstValuesIterative, depthSearchValueRecursive, inOrderTransversalIterative, inOrderTransversalRecursive, isInTreeRecursive, isTheSameTreeRecursive, maxRouteSumIterative, maxRouteSumRecursive, minValueTreeIterative, minValueTreeRecursive, sumTreeIterative, sumTreeRecursive } from "./Algorithms";
import { Tree, TreeNode } from "./TreeNode";

export const TreeNodeComponent: any = () => {

    useEffect(() => {

        const elArbol = new Tree();
        elArbol.createTreeFromArray([1, 2, 3]);
        const elArbol2 = new Tree();
        elArbol2.createTreeFromArray([1, 2, null]);
        const elArbol3 = new Tree();
        elArbol3.createTreeFromArray([1, 2, 3]);
        const elArbol4 = new Tree();
        elArbol4.createTreeFromArray([3, 2, 1]);

        console.log(isTheSameTreeRecursive(elArbol.root, elArbol4.root));

    }, []);

    return (
        <div>

        </div>
    )
};
