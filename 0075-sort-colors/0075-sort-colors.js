/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
   const arrObj = {
       red: 0,
       white: 0,
   }
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0) arrObj.red += 1 
        else if(nums[i] === 1) arrObj.white += 1
    }
    for(let i=0; i< nums.length; i++){
        if(arrObj.red > 0) {
            nums[i] = 0;
            arrObj.red--;
        } else if(arrObj.white > 0) {
            nums[i] = 1;
            arrObj.white--;
        } else nums[i] = 2;
    }
    return nums;
};