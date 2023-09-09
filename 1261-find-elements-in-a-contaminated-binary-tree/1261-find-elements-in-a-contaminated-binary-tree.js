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
 */

var FindElements = function(root) {
    this.root = root;
    const traverse = (node, parentVal) => {
        if(!node) return;
        node.val = parentVal;
        node.left && traverse(node.left, (2*parentVal) + 1);
        node.right && traverse(node.right, (2*parentVal)+ 2)
        return;
    }
    traverse(this.root, 0);
    return this;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    let isExists = false;
    const traverse = (node) => {
        if(!node) return;
        if(!!isExists) return;
        if(node.val === target) {
            isExists = true;
            return;
        }
        (!isExists && node.left) && traverse(node.left);
        (!isExists && node.right) && traverse(node.right);
        return;
    }
    traverse(this.root);
    return isExists;
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */