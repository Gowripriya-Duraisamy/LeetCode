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
        const totalChildrenLength = node.children.length;
        resultArr.push(node.val);
        let i=0;
        while (i < totalChildrenLength) {
            traverse(node.children[i]);
            i++;
        }
        return;
    }
    traverse(root);
    return resultArr;
};