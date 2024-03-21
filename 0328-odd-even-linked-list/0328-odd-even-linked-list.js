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
var oddEvenList = function (head) {
    if (!head || head.next === null) return head;
    let temp = head;
    let count = 1;
    let initialEven = null;
    let evenHead = null;
    let previousTemp = null;

    while (temp) {
        if (count % 2 === 0) {
            if (!initialEven) {
                initialEven = temp;
                evenHead = initialEven;
            } else {
                evenHead.next = temp;
                evenHead = evenHead.next;
            }
            temp = temp.next;
            evenHead.next = null;
        } else {
            if (!previousTemp) {
                previousTemp = temp;
            } else {
                previousTemp.next = temp;
                previousTemp = previousTemp.next;
            }
            temp = temp.next;
        }
        count++;
    }
    previousTemp.next = initialEven;
    return head;
};