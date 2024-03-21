/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let reverseNode = null;
    if(!head) return head;
    const helper = (node) => {
        if (node && node.next === null) {
            reverseNode = node;
            return node;
        }
        const returnedNode = helper(node.next);
        node.next = null;
        returnedNode.next = node;
        return returnedNode.next;

    }
    helper(head);
    return reverseNode;
};