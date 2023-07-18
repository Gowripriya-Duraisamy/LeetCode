/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
     if(nums.length === 2) {
        return (nums[0]- 1) * (nums[1] - 1)
    } else {
        const max1 = Math.max(...nums);
        const index = nums.indexOf(max1);
        [nums[index], nums[nums.length - 1]] = [nums[nums.length - 1], nums[index]];
        nums.pop();
        const max2 = Math.max(...nums) - 1;
        return max2 * (max1 - 1)
    }
};