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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let rootNode = null;
    let iRoot = null;
    const inorderTraversal = (bstRoot) => {
        if (!bstRoot) {
            return;
        }
        inorderTraversal(bstRoot.left, iRoot);
        if (!iRoot) {
            iRoot = new TreeNode(bstRoot.val);
            rootNode = iRoot;
        }
        else {
            iRoot.right = new TreeNode(bstRoot.val);
            iRoot = iRoot.right;
        }
        inorderTraversal(bstRoot.right, iRoot);
    }
    inorderTraversal(root);
    return rootNode;
};