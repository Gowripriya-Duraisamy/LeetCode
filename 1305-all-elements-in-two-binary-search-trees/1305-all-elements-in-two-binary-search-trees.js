/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

const constructArr = (root) => {
    let endArr = [];
    if(!root) return [];
    const traversePreOrder = (node) => {
      if(node.val !== null) {
        node.left && traversePreOrder(node.left);
        endArr.push(node.val);
        node.right && traversePreOrder(node.right);
      }
    }
    traversePreOrder(root);
    return endArr;
}
var getAllElements = function(root1, root2) {
    const arr1 = constructArr(root1);
    const arr2 = constructArr(root2);
    let i=0; 
    let j=0;
    const resultArr = [];
    while(i<arr1.length && j < arr2.length) {
            if(arr1[i] < arr2[j]) {
                 resultArr.push(arr1[i]);
                 i++;
            } else {
                resultArr.push(arr2[j]);
                j++;
            }
    } 
    while(i < arr1.length) {
        resultArr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        resultArr.push(arr2[j]);
        j++;
    }
    return resultArr;
}