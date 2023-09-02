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
 * @return {number}
 */

const maxDepth = (node) => {
        if(!node) return 0;
        return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}
var deepestLeavesSum = function(root) {
    if(!root) return 0;
    const depth = maxDepth(root);
    let deepLeavesSum = 0;
    const traverse = (node, level) => {
        if(!node) return;
        if(!node.left && !node.right && level === depth) {
            deepLeavesSum += node.val;
            return;
        }
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
        return;
    }
    traverse(root, 1);
    return deepLeavesSum;
};