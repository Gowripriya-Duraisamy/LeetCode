/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let i=0;
    for(; i<k; i++) {
        sum += nums[i];
    }
    let avg = sum / k;
    while(i< nums.length) {
        sum += nums[i] - nums[i-k];
        const calcAvg = sum /k;
        avg = calcAvg > avg ? calcAvg : avg;
        i++;
    }
    return avg.toFixed(5);
};