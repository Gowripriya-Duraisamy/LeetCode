/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    const map = new Map();
    const matchResult = [[], []];
    matches.forEach(match => {
        const loser = map.get(match[1]) || 0;
        map.set(match[0],  map.get(match[0]) || 0);
        map.set(match[1], loser === -2 ? loser : +loser - 1);
    })
    for (const [key, value] of map) {
        if (value === 0) {
            matchResult[0].push(key)
        } else if (value === -1) {
            matchResult[1].push(key);
        }
    }
    matchResult[0].sort((a,b) => a-b);
     matchResult[1].sort((a,b) => a-b);
    return matchResult;
};