/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const filterArr = nums.filter(num => num!==0);
    for(let i=0; i<nums.length ; i++) {
        if(i < filterArr.length) {
            nums[i] = filterArr[i];
        } else {
            nums[i] = 0;
        }
    }
};