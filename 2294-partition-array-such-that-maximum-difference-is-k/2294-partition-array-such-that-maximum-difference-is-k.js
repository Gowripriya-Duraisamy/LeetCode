/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a,b) => a-b);
    let subSequenceCount = 0;
    let min = nums[0];
    let i=1;
    for(; i< nums.length; i++) {
        const diff = nums[i] - min;
        if(diff > k) {
            subSequenceCount++;
            min = nums[i];
        }
    }
   
    return ++subSequenceCount;
};
