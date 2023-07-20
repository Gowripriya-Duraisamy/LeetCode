/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    for(i=0; i<nums.length; i++) {
        if(nums[i] !== max && nums[i] !== min) return nums[i];
    }
    return -1;
};