/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    const maxNum = Math.ceil( Math.sqrt(c));
    const squareMap = new Map();
    for(let i=0; i<= maxNum; i++){
        const sq = i*i
        if(sq <= c) squareMap.set(i*i, 1)
    };
    let returnVal = false;
    squareMap.forEach((_value, key) =>{
        const checkVal = Math.abs(c - key);
        if(squareMap.has(checkVal)) returnVal = true;
    });
    return returnVal;
};