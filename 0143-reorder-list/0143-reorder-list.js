/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let temp = head;
    let fast = head
    let rem = null;
    while (fast) {
        rem = temp;
        temp = temp.next;
        fast = fast.next?.next;
    }
    let slow = rem.next;
    rem.next = null;
    let reverseHead = null

    while (slow) {
        const next = slow.next;
        slow.next = reverseHead;
        reverseHead = slow;
        slow = next;
    }
    temp = head;
    while (temp && reverseHead) {
        const next = temp.next;
        const reverseNext = reverseHead.next;
        temp.next = reverseHead;
        temp = temp.next;
        temp.next = next;
        temp = temp.next;
        reverseHead = reverseNext;
    }

    return head;

};