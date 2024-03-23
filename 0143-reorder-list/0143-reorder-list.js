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
var reorderList = function(head) {
   let temp = head;
    let count = 0;
    while(temp) {
        count++;
        temp = temp.next;
    }
    const mid = count %2 ===0 ? Math.floor(count/2) : Math.ceil(count / 2);
    count = 0;
    temp = head;
    let rem = null;
    while(count < mid) {
        rem = temp;
        temp = temp.next;
        count++;
    };
    let nextRem = rem.next;
    rem.next = null;
    let slow = nextRem;
    let reverseHead = null
    
    while(slow) {
        const next = slow.next;
        slow.next = reverseHead;
        reverseHead = slow;
        slow = next;
    }
    temp = head;
    while(temp && reverseHead ) {
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