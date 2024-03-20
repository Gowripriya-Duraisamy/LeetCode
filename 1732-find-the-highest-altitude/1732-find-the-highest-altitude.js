/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let previousVal = gain[0];
    let max = 0;
    gain[0] = 0;
    let i = 0;
    const length = gain.length
    for (; i <= length; i++) {
        const temp = gain[i + 1]
        if (i !== length) gain[i + 1] = previousVal + gain[i];
        previousVal = temp;
        max = max > gain[i] ? max : gain[i];
    }
    return max > gain[length] ? max : gain[length];
};