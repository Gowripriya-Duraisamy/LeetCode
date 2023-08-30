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
var averageOfLevels = function(root) {
    const resultArr = [];
    const traverse = (node, level) => {
      if(!node) return;
      if(resultArr.length <= level) {
        resultArr.push({val: node.val, count: 1});
      } else {
        resultArr[level].val = resultArr[level].val + node.val;
        resultArr[level].count = resultArr[level].count + 1;
      }
      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
      return;
    }
    traverse(root, 0);
    return resultArr.map(result => result.val / result.count);
};