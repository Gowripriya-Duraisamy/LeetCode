/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let returnArr = new Array(2*n);
    let start = 0;
    for(let i=0; i<n; i++) {
        returnArr[start] = nums[i];
        returnArr[++start] = nums[i + n];
        start++;

    }
    return returnArr;
};