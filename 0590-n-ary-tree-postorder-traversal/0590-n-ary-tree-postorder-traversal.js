/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
 const resultArr = [];
  const traverse = (node) => {
    if(!node) return;
    for (let i=0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }
    resultArr.push(node.val);
    return;
  }
  traverse(root);
  return resultArr;
};