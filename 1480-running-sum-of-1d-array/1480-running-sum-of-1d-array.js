/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
   nums.reduce((a,c,i,arr) => {
        return arr[i] += a
    })
    return nums;
};