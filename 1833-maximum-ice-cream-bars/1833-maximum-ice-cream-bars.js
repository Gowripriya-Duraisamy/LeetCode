/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */

var maxIceCream = function(costs, coins) {
    const freq = new Array(Math.max(...costs) + 1).fill(0);
    costs.forEach(cost => freq[cost]++);
    let count = 0;
    for(let i=0; i<freq.length; i++) {
        if(freq[i] > 0) {
            while(freq[i]) {
                coins = coins -i;
                if(coins >= 0) count++;
                freq[i]--;
            }
            freq[i] = 0;
            if(coins<=0) break;
            
        }
        
    }
    return count;
};