/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
      let result = 0;
    grid.map(row => {
        let countTaken = 0;
        for(let i=0; i<row.length; i++) {
            if(row[i] === 1 && !countTaken) {
                result += 2;
                countTaken = 1;
            } else if(countTaken && row[i] === 0) {
                countTaken = 0;
            }
            
        }
    })

    for(let i=0; i<grid[0].length; i++) {
        let countTaken = 0;
        for(j=0; j< grid.length; j++) {
            if(grid[j][i] === 1 && !countTaken) {
                result += 2;
                countTaken = 1;
            }else if(countTaken && grid[j][i] === 0) {
                countTaken = 0;
            }
        }
    }

    return result;
};