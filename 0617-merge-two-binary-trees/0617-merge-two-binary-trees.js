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
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
     if (root1 && root2) {
      if (root1.val && root2.val) root1.val = root1.val + root2.val;
      else if (!root1.val && root2.val) root1.val = root2.val;

      if (root1.left && root2.left) mergeTrees(root1.left, root2.left);
      else if (!root1.left) root1.left = root2.left;

      if (root1.right && root2.right)  mergeTrees(root1.right, root2.right);
      else if (!root1.right) root1.right = root2.right;

      return root1;
    }else if(!root1) {
      return root2;
    } else {
      return root1
    }
};