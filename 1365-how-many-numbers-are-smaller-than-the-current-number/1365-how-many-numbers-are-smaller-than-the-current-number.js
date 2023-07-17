/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const counts = new Array(101).fill(0);
    nums.forEach(num => counts[num]++);
    
    let prevCount = 0;
    for (let i = 0; i < counts.length; i++) {
        const count = counts[i];
        counts[i] = prevCount;
        prevCount += count;
    }
    
    return nums.map(num => counts[num]);
};