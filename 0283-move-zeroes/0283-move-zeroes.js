/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const arrLen = nums.length;
    let i=0;
    while(i < nums.length) {
        if(nums[i] === 0) {
            nums.splice(i, 1)
        }else i++;
    }

    while(i< arrLen) {
        nums.push(0)
        i++;
    }
};