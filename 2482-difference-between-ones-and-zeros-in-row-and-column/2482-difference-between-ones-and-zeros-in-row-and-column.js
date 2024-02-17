/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
   const rowOnes = new Array(grid.length).fill(0);
   const rowZeros = new Array(grid.length).fill(0)
   const colOnes = new Array(grid[0].length).fill(0)
   const colZeros = new Array(grid[0].length).fill(0)

   for(let i=0; i< grid.length; i++) {
     for(let j=0; j< grid[0].length; j++) {
        if(grid[i][j]) {
            rowOnes[i]++;
            colOnes[j]++;
        } else {
            rowZeros[i]++;
            colZeros[j]++;
        }
     }
   }

   for(let i=0; i< grid.length; i++) {
    for(let j=0; j<grid[0].length; j++) {
        grid[i][j] = rowOnes[i] + colOnes[j] - rowZeros[i] - colZeros[j];
    }
   }

   return grid; 
};