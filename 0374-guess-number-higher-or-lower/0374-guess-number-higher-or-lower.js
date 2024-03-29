/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let start = 1
    let end = n;
    let i = Math.floor(n / 2) || 1;
    while (i >= start && i <= end) {
        const num = guess(i);
        if (num === -1) {
            end = i - 1;
        } else if (num === 1) {
            start = i + 1;
        } else {
            return i;
        }
        i = Math.floor((start + end) / 2)
    }
};