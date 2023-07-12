/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
   return candies.map(candy => {
       return candy+extraCandies >= max ? true : false;
   })
};