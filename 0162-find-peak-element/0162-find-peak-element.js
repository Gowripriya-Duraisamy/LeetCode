/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) return 0;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        if (start - 1 === -1 && nums[start + 1] < nums[start]) return start;
        if (end + 1 === nums.length && nums[end - 1] < nums[end]) return end;
        if (nums[start] > nums[start + 1] && nums[start] > nums[start - 1]) return start;
        if (nums[end] > nums[end + 1] && nums[end] > nums[end - 1]) return end;
        start++;
        end--;
    }
};