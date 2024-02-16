/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    let i = 0;
    let j = -1;
    let maxRow = m;
    let minRow = 0;
    let minCol = 0;
    let maxCol = n;
    let modifiedAt = 'j';
    let type = 'increment';
    const spiral2D = new Array(m).fill().map(_ => new Array(n).fill(-1))
    while (head !== null) {
        if (modifiedAt === 'j') {
            type === "increment" ? j++ : j--;
        } else {
            type === "increment" ? i++ : i--;
        }
        while (true) {
            if (i >= minRow && i < maxRow && j >= minCol && j < maxCol) break;
            if (modifiedAt === 'j') {
                modifiedAt = "i";
                if (type === "increment") {
                    type = "increment";
                    i++;
                    j--;
                    minRow++;
                } else {
                    type = "decrement";
                    i--;
                    j++;
                    maxRow--;
                }

            } else {
                modifiedAt = "j";
                if (type === "increment") {
                    type = "decrement";
                    j--;
                    i--;
                    maxCol--;
                } else {
                    i++;
                    j++;
                    type = "increment";
                    minCol++
                }
            }
        }
        spiral2D[i][j] = head.val;
        head = head.next;
    }
    return spiral2D;
};