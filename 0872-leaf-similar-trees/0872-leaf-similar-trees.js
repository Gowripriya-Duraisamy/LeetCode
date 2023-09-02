/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

const leafArr = (root) => {
  const result = [];
  const traverse = (node) => {
    if (!node) return;
    if(!node.left && !node.right) {
        result.push(node.val);
        return;
      }
    traverse(node.left);
    traverse(node.right);
    return;

  }
  traverse(root);
  return result;
}

var leafSimilar = function (root1, root2) {
  const firstSeq = leafArr(root1);
  const secondSeq = leafArr(root2);
  if (firstSeq.length !== secondSeq.length) return false;
  else {
    for (let i = 0; i < firstSeq.length; i++) {
      if (firstSeq[i] !== secondSeq[i]) return false
    }
    return true;
  };
}


