/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order

    let count = 0; // Initialize the counter for moves
    let neededValue = nums[0]; // Start with the first value

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < neededValue) {
            // If the current number is less than the needed value, increment it
            count += neededValue - nums[i];
            nums[i] = neededValue; // Update the current number to the needed value
        }
        neededValue = nums[i] + 1; // Update needed value for the next element
    }

    return count;
};
