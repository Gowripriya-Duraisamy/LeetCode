/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    let pivot = 0;
    for(let i=1; i< nums.length; i++) {
        rightSum += nums[i];
    };

    while(pivot < nums.length) {
        if(leftSum === rightSum) return pivot;
        leftSum += nums[pivot];
        rightSum -= nums[pivot + 1];
        pivot++; 

    }
    return -1;
};