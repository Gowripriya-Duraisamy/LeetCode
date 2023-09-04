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
const bstToGst = function (root) {
    let totalSum = 0;
    const traverse = node => {
        if (!node) return;
        !!node.right && traverse(node.right);
        totalSum += node.val;
        node.val = totalSum;
        !!node.left && traverse(node.left);
        return;
    }
    traverse(root);
    return root;
};