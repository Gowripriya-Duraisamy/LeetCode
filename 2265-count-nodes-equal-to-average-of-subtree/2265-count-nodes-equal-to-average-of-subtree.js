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
var averageOfSubtree = function(root) {
     if(!root) return 0;
    let count = 0;
    const traverse = (node) => {
      if(!node) return [];
      const resultArr = [node.val]
      resultArr.push(...traverse(node.left));
      resultArr.push(...traverse(node.right));
      let sum =0;
      for(let i=0; i < resultArr.length; i++){
        sum += resultArr[i];
      }
      Math.floor(sum  / resultArr.length) === node.val && count++;
      return resultArr;
    } 
    traverse(root);
    return count;
};