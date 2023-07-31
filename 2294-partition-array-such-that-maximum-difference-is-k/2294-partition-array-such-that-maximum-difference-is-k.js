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
    let indexedUpto = 0;
    for(; i< nums.length; i++) {
        const diff = nums[i] - min;
        if(diff === k) {
            indexedUpto = i;
            i++;
            min !== nums[i] && subSequenceCount++;
            min = nums[i]
        } else if(diff > k) {
            indexedUpto = i-1;
            subSequenceCount++;
            min = nums[i];
        }
    }
    if(i === nums.length) {
        if(nums[i-1] !== nums[i-2] ) ++subSequenceCount;
        if(nums[i-1] === nums[i-2] && indexedUpto !== i-2) ++subSequenceCount;
        if(!subSequenceCount) ++subSequenceCount;
    }
    return subSequenceCount;
};
