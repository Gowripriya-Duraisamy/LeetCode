/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    const resultArr = [];
    const traverse = (node) => {
        if(!node) return;
        resultArr.push(node.val);
        for (let i=0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }
        return;
    }
    traverse(root);
    return resultArr;
};