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
 * @return {string}
 */
var tree2str = function(root) {
    const traverse = (node) => {
      if(!node) return '';
      const left = traverse(node.left);
      const right = traverse(node.right);
      if(!left && !right) return `${node.val}`;
      if(!right) return `${node.val}(${left})`;
      return `${node.val}(${left})(${right})`;
      
    }
    return traverse(root);
};