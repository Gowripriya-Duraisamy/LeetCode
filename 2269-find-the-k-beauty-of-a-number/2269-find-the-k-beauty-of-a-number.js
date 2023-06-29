/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    if(k > num.length) return 0;
    let count = 0;
    let divisorNum = '';
    num = num.toString();
    for(let i= 0; i<k; i++) {
        divisorNum += num[i]
    };

    for(i=k; i<=num.length; i++){
        const isDivisable = +num % +divisorNum
        if(isDivisable === 0) count++;
        if(i < num.length) {
            divisorNum = divisorNum.slice(1) + num[i]
        }
    }

    return count;
};
