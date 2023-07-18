/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
   const sortedNames = [];
   while(heights.length > 1) {
        const max = Math.max(...heights);
        const index = heights.indexOf(max);
        sortedNames.push(names[index]);
        [names[index], names[names.length - 1]] = [ names[names.length - 1], names[index]];
        [heights[index], heights[heights.length - 1]] = [ heights[heights.length - 1], heights[index]];
        heights.pop();
        names.pop();
   } 
   sortedNames.push(names[0])
   return sortedNames;
};