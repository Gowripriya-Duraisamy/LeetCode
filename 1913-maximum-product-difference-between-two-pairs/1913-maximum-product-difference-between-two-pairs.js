/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
       const min1 = Math.min(...nums);
    const max1 = Math.max(...nums);
    const minIndex = nums.indexOf(min1);
    [nums[minIndex], nums[nums.length - 1]] =  [ nums[nums.length - 1], nums[minIndex]] 
    nums.pop();
    const maxIndex = nums.indexOf(max1);
    [nums[maxIndex], nums[nums.length - 1]] =  [ nums[nums.length - 1], nums[maxIndex]] 
    nums.pop();
    const min2 = Math.min(...nums);
    const max2 = Math.max(...nums);
    return (max2 * max1) - (min1* min2)
};