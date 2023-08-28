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
    let totalChildrenLength  = node.children.length;
    let i = 0;
    while(i < totalChildrenLength) {
      traverse(node.children[i]);
      i++;
    }
    resultArr.push(node.val);
    return;
  }
  traverse(root);
  return resultArr;
};