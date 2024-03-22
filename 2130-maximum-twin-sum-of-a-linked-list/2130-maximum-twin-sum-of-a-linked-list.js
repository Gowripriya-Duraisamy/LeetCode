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
var pairSum = function(head) {
    if(!head) return 0;
    let temp = head;
    let count = 0;
    while(temp) {
        count++;
        temp = temp.next;
    }
    const totalLen = count;
    const mid = Math.floor(count / 2);
    count = 0;
    temp = head;
    const arr = [];
    while(count < mid) {
        arr.push(temp.val);
        temp = temp.next;
        count++;
    }
    let max = arr[0];
    while(temp) {
       const index = totalLen - 1 - count;
        arr[index] += temp.val;
        max = arr[index] > max ? arr[index] : max;
        temp = temp.next;
        count++;
    }
    
    return max;
};