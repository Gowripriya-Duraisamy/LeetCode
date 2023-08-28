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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const resultArr = [];
    const traverse = (node) => {
        if(!node) return;
        node.left && traverse(node.left);
         resultArr.push(node.val);
        node.right && traverse(node.right);
        return;
    }
    traverse(root);
    return resultArr;
};