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
 * @return {TreeNode}
 */

const balanceInsert = (value, root) => {
    const node = new TreeNode(value);
    if (!root) {
        root = node;
        return root;
      }
    let parent = root;
    while (parent.val) {
        if (parent.val > value) {
            if (parent.left === null) {
                parent.left = node;
                return root;
            }
            parent = parent.left;
        } else {
            if (parent.right === null) {
                parent.right = node;
                return root;
            }
            parent = parent.right;
        }
    }
}
//getArray 
const getArray = (root) => {
    const resultArr = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        resultArr.push(node.val);
        traverse(node.right);
        return;
    }
    traverse(root);
    return resultArr;
}


var balanceBST = function (root) {
    const resultArr = getArray(root);
    let treeNode = null;
   const traverseArr = arr => {
        if(!arr.length) return;
        if(arr.length === 1) {
            treeNode =  balanceInsert(arr[0], treeNode);
            return;
        }
        const midIndex =  arr.length % 2 === 0 ? (arr.length / 2) - 1 : Math.floor(arr.length / 2);
        treeNode = balanceInsert(arr[midIndex], treeNode);
        traverseArr(arr.slice(0, midIndex));
        traverseArr(arr.slice(midIndex + 1));
        return;
      }
    traverseArr(resultArr);
    return treeNode;
};