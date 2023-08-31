/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    let max = 0;
    if(!root) return max;
    const traverse = (node, level) => {
        if (!node) return ;
        for (let i = 0; i < node.children.length; i++) {
            max = level + 1 > max ? level + 1 : max;
            traverse(node.children[i], level + 1);
        }
        return;
    }
    max = 1;
    traverse(root, 1);
    return max;
};