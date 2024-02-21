/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (nums, k, threshold) {
    let sum = 0;
    let i = 0;
    for (; i < k; i++) {
        sum += nums[i];
    }
    let count = sum / k >= threshold ? 1 : 0;
    while (i < nums.length) {
        sum = sum + nums[i] - nums[i - k];
        sum / k >= threshold && count++;
        i++;
    }
    return count;
};