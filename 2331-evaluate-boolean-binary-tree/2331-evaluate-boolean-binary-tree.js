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
 * @return {boolean}
 */
var evaluateTree = function(root) {
     const postOrderTraversal = (bstRoot) => {
        if(!bstRoot.left && !bstRoot.right) {
          if(bstRoot.val === 0 || bstRoot.val === 1) return bstRoot.val;
          return;
      }
      if(bstRoot.left && bstRoot.right) {
        const leftValue = postOrderTraversal(bstRoot.left);
        const rightValue = postOrderTraversal(bstRoot.right);
        if(bstRoot.val === 2 ) {
          if(leftValue || rightValue) return 1;
          return 0;
        } else if(bstRoot.val === 3) {
            if(leftValue && rightValue) return 1;
            return 0;
        }
        
      }
     }
      const result = postOrderTraversal(root);
      return result === 0 ? false : true;
};