/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum = [];
    let difference = [];
    let sum =0;
    for(let i=0; i< nums.length; i++) {
        leftSum[i] = sum;
        sum += nums[i];
    }
    sum=0;
    for(let i=nums.length-1; i>= 0; i--) {
        difference[i] = Math.abs(sum - leftSum[i]);
        sum += nums[i];
    }
    return difference;
};