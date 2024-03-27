/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const occurence = new Map();
    const occurenceCheck = new Map();
    let uniqueExist = true;
    for (let i = 0; i < arr.length; i++) {
        const val = occurence.get(arr[i]) || 0;
        occurence.set(arr[i], val + 1);
    };
    occurence.forEach((value, key) => {
        if(occurenceCheck.get(value)) uniqueExist = false;
        else occurenceCheck.set(value, 1);
    });
    return uniqueExist;
};