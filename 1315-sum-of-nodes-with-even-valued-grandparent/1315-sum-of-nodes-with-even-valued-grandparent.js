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
var sumEvenGrandparent = function(root) {
    let sum = 0;
    const traverse = (node) => {
      if(!node) return;
      if(node.val % 2 === 0) {
        sum += node.left?.left?.val || 0;
        sum += node.left?.right?.val|| 0;
        sum += node.right?.left?.val || 0;
        sum += node.right?.right?.val || 0;
      }
      traverse(node.left);
      traverse(node.right);
      return;
    }
    traverse(root);
    return sum;
};