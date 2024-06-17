/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    const squareMap = new Map();
    for(let i=0; i<= c; i++){
        const sq = i*i
        if(sq <= c) squareMap.set(i*i, 1)
        else break;
    };
    let returnVal = false;
    squareMap.forEach((_value, key) =>{
        const checkVal = Math.abs(c - key);
        if(squareMap.has(checkVal)) returnVal = true;
    });
    return returnVal;
};