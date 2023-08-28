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
        let i=0;
        while (i < node.children.length) {
            traverse(node.children[i]);
            i++;
        }
        return;
    }
    traverse(root);
    return resultArr;
};