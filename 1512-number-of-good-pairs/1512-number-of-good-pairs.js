/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
   let count = 0;
    let obj={}
    for(let i=0; i<nums.length; i++) {
        if(obj[nums[i]]) {
            count += obj[nums[i]];
            obj[nums[i]] += 1;
        }else obj[nums[i]] = 1
    }

    return count
};