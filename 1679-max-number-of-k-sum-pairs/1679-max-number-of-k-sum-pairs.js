/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
     let i = 0;
  let count = 0;
  const map = new Map();
  nums = nums.filter((num) => num <= k).sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const val = map.get(nums[i]) || 0;
    map.set(nums[i], val + 1);
  }
  for (let i = 0; i < nums.length; i++) {
    const val = k - nums[i];
    const mapVal = map.get(val) || 0;
    const orgVal = map.get(nums[i]) || 0;
    if (mapVal > 0 && orgVal > 0) {
      if (val === nums[i]) {
        if (mapVal > 1) {
          map.set(val, mapVal - 2);
          count++;
        }
      } else {
        count++;
        map.set(val, mapVal - 1);
        map.set(nums[i], orgVal - 1);
      }
    }
  }

  return count;
};