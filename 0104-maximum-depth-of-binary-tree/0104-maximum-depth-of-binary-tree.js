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
var maxDepth = function(root) {
    let max = 0;
    const traverse = (node) => {
      if(!node) return 0;
      const left = traverse(node.left) + 1;
      const right = traverse(node.right) + 1;
      max = max > left ? max : left;
      max = max > right ? max :  right;
      return left > right ? left : right;
    }

    traverse(root)
    return max;
};