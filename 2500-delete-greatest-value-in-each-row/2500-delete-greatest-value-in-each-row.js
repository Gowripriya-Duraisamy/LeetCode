/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    grid = grid.map(gridD => gridD.sort((a,b) => a - b));
    let totalSum = 0;
    while(grid[0].length) {
        let value = 0;
        grid.forEach(row => {
            const rowVal = row.pop();
            if(rowVal > value) {
                value = rowVal
            }
        })
        totalSum += value;
    }
    return totalSum;
};