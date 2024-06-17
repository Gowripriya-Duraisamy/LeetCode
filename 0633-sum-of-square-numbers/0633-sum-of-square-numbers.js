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
     for(let i=0; i<= c; i++){
        const checkVal = c -i*i
        if(squareMap.has(checkVal)) return true;
         if((i*i) > c) return false;
    };
    return returnVal;
};