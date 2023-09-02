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
var tree2str = function(node) {
      if(!node) return '';
      const left = tree2str(node.left);
      const right = tree2str(node.right);
      if(!left && !right) return `${node.val}`;
      if(!right) return `${node.val}(${left})`;
      return `${node.val}(${left})(${right})`;
      
};