/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const map = new Map();
    arr.forEach(val => {
        map.set(val, (map.get(val) || 0) + 1);
    });
    const sortedarr = [...map.values()].sort((a,b) => b-a);
    let count = 0;
    let length = arr.length;
    for(const value of sortedarr) {
        length = length - value;
        if(length <= arr.length/2) return ++count;
        else ++count;
    }
    return count;
};