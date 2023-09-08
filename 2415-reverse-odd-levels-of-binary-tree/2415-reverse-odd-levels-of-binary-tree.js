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

const storeDepths = (root) => {
    const map = new Map();
    const traverse = (node, level) => {
        if (!node) return;
        if (level % 2 === 0) {
            const value = map.get(level) || [];
            map.set(level, [...value, node.val]);
        }
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
        return;
    };
    traverse(root, 1);
    return map;
}
var reverseOddLevels = function (root) {
    const depth = storeDepths(root);
    const traverse = (node, level) => {
        if (!node) return;
        if (level % 2 === 0) {
            const val = depth.get(level);
            node.val = val.pop();
        }
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
        return;
    }

    traverse(root, 1);
    return root;
};