import { useEffect } from "react";

import { depthFirstValuesIterative, depthFirstValuesRecursive2 } from "./Algorithms";
import { TreeNode } from "./TreeNode";

export const TreeNodeComponent: any = () => {

    useEffect(() => {
        const elarbol = new TreeNode(25);
        elarbol.left = new TreeNode(10);
        elarbol.right = new TreeNode(40);
        elarbol.left.left = new TreeNode(5);
        elarbol.left.right = new TreeNode(15);
        elarbol.right.left = new TreeNode(30);
        elarbol.right.right = new TreeNode(45);

        console.log(depthFirstValuesRecursive2(elarbol));

    }, []);

    return (
        <div>

        </div>
    )
};
