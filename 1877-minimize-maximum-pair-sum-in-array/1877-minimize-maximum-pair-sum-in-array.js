/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let lastIndex = nums.length - 1;
    let max = 0;
    for (i = 0; i < nums.length / 2; i++) {
        const value = nums[i] + nums[lastIndex];
        lastIndex--;
        max = value > max ? value : max;
    }
    return max;
};