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
var isUnivalTree = function(root) {
    let result = true;
    const val = root.val;
    const traverse = (node) => {
       if(!node) return;
        if(!result) return;
        if( node.val !==  val) {
            result = false;
            return;
        }
        traverse(node.left);
        traverse(node.right);
        return;
    }
    traverse(root);
    return result;
};