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
    this.arr = [];
    const traverse = (node, parentVal) => {
        if(!node) return;
        this.arr.push(parentVal)
        node.left && traverse(node.left, (2*parentVal) + 1);
        node.right && traverse(node.right, (2*parentVal)+ 2)
        return;
    }
    traverse(root, 0);
    return this;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    for(let i=0; i< this.arr.length; i++) {
        if(this.arr[i] === target) return true;
    }
    return false;
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */