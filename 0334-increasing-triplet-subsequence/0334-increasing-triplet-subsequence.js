/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let num1 = nums[0];
    let num2;
    let num3;
    for(let i=1; i<nums.length; i++) {
        if(nums[i] <= num1) {
            num1 = nums[i];
        } else {
            if(nums[i] <= num2 || num2 === undefined) {
                num2 = nums[i];
            } else {
                if(nums[i] <= num3 || num3 === undefined) {
                    num3 = nums[i];
                }
            }
        }
        if(num1 < num2 && num2 < num3) return true;
    }
    return false;
};