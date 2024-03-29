/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if(nums.length === 1) return 0;
    for (let i = 0; i < nums.length; i++) {
        if(i-1 === -1 && nums[i+1] < nums[i] ) return i;
        else if(i+1 >= nums.length && nums[i-1] < nums[i]) return i;
        else if (nums[i] > nums[i - 1]  && nums[i] > nums[i + 1]) return i;
    }
};