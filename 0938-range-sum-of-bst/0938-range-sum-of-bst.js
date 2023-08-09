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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    const inOrderTraversal = (parent) => {
        if(parent !== null) {
            if(parent.val >= low && parent.val <= high) sum += parent.val;
            if(parent.val > low) inOrderTraversal(parent.left);
            if(parent.val < high) inOrderTraversal(parent.right);
        }
        return;
    }
    inOrderTraversal(root)
    return sum;
};