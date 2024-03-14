/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let i = 0;
    let count = 0;
    const arr = [];
    let arrIndex = 0;
    while (arr.length < k && i < nums.length) {
        if (nums[i] === 0) {
            arr.push(i);
        }
        count++
        i++;
    }
    let maxCount = count;
    while (i < nums.length) {
        if (nums[i] === 0) {
            maxCount = count > maxCount ? count : maxCount;
            arr.push(i);
            count = i - arr[arrIndex];
            arrIndex++;
        } else count++;
        i++;
    }
    return count > maxCount ? count : maxCount;
};