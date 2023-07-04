/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    return nums.map((_num, index) => {
        return nums[nums[index]]
    })
};