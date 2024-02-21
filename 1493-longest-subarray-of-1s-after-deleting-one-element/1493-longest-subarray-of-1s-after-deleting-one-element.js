/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let isZeroEncountered = 0;
    let previousZerothIndex = 0;
    let count = 0;
    let tempCount = 0;
    let index = 0;
    while (index < nums.length) {
        if (nums[index] === 1) {
            tempCount++;
        } else {
            if (!isZeroEncountered) isZeroEncountered = 1;
            if (tempCount > count) count = tempCount;
            tempCount = index - previousZerothIndex;
            previousZerothIndex = index + 1;

        }
        index++;
    }

    return !isZeroEncountered ? --tempCount : tempCount > count ? tempCount : count;
};