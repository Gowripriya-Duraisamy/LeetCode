/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    if (!head) return 0;
    let temp = head;
    let fast = head;
    let prev = null;

    while (fast) {
        fast = fast.next.next;
        const rem = temp.next;
        temp.next = prev;
        prev = temp;
        temp = rem;
    }
    let max = 0;
    while (temp) {
        const val = temp.val + prev.val;
        max = max > val ? max : val;
        temp = temp.next;
        prev = prev.next;
    }
    return max;
};