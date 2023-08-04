/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
      const map = new Map();
    for(let i= lo; i<=hi; i++) {
        let value = i;
        let count = 0;
        while(value !== 1) {
            if(value % 2 === 0) {
                value = Math.floor(value / 2);
            } else {
                 value = 3 * value + 1;
            }
            count++;
        }
        map.set(i, count);
    }
    const sortedArr = [...map.entries()].sort((a,b) => a[1] - b[1]);
    return sortedArr[k-1][0];
;}