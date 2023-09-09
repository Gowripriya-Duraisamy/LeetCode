/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


var reverseOddLevels = function (root) {
    const traverse = (node1, node2, level) => {
        if (!node1 || !node2) return;
        if (level % 2 !== 0) {
            const temp = node1.val;
            node1.val = node2.val;
            node2.val = temp;
        }
       traverse(node1.left, node2.right, level+1);
       traverse(node1.right, node2.left, level+1)
        return;
    }

    traverse(root.left, root.right, 1);
    return root;
};