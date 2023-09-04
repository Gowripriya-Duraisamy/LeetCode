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

const sumTree = root => {
    let sum = 0;
    const traverse = (node) => {
        if (!node) return;
        sum += node.val;
        traverse(node.left);
        traverse(node.right);
        return;
    }
    traverse(root);
    return sum;
}

var bstToGst = function (root) {
    let totalSum = sumTree(root);
    const traverse = node => {
        if (!node) return;
        !!node.left && traverse(node.left);
        const temp = node.val;
        node.val = totalSum;
        totalSum -= temp;
        !!node.right && traverse(node.right);
        return;
    }
    traverse(root);
    return root;
};