/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const inOrderTraversal = (cloned, target) => {
    if(!cloned) return null;
    if(cloned.val === target.val) {
        return cloned;
    } else {
        if(cloned.left !== null){
            const returnVal = inOrderTraversal(cloned.left, target);
            if(!returnVal && cloned.right !== null) {
                return inOrderTraversal(cloned.right, target);
            }
            return returnVal;
        } else if(cloned.right !== null) {
             return inOrderTraversal(cloned.right, target);
        }
        return;
    }
}

var getTargetCopy = function(_original, cloned, target) {
   return  inOrderTraversal(cloned, target);
};