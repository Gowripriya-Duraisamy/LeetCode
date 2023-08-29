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
var sumRootToLeaf = function (root) {
    const traverse = node => {
      if(!node) return [];
      if(!node.left && !node.right) return [node.val];
      const leftarr = traverse(node.left);
      const rightarr = traverse(node.right);
      const finalArr = [];
      for(let i=0; i<leftarr.length; i++) {
        finalArr.push(`${node.val}${leftarr[i]}`);
      }
      for(let i=0; i<rightarr.length; i++) {
        finalArr.push(`${node.val}${rightarr[i]}`);
      }
      return finalArr;
    }
    const binaryArr = traverse(root);
    let sum = 0;
    for(let i=0; i< binaryArr.length; i++) {
      sum += parseInt(binaryArr[i], 2);
    }
    return sum;
}
