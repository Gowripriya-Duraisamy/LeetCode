/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let count = 0;
    for(let i=0; i<customers.length; i++) {
        if(!grumpy[i]) count += customers[i];
    }
    let maxCount = count;
    let i=0;
    for(; i< minutes; i++) {
        if(grumpy[i]) count+= customers[i];
    }

    while(i < customers.length) {
        if(count > maxCount) maxCount = count;
        if(grumpy[i-minutes]) count -= customers[i - minutes];
        if(grumpy[i]) count += customers[i];
        i++;
    }
    return count > maxCount ? count : maxCount;
};