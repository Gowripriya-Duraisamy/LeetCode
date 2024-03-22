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
var deleteMiddle = function(head) {
    if(!head || head.next === null) return null;
    let count = 0;
    let temp = head;
    while(temp) {
        temp = temp.next;
        count++;
    }

    const mid = Math.floor(count/ 2);
    temp = head;
    count = 0;
    while(count < mid-1) {
        temp = temp.next;
        count++;
    }

    temp.next = temp.next.next;
    return head;

};