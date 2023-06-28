/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  let count = 0;
    let totalCount = 0;
    let completed = 0;
    boxes = boxes.split('');
    for(let i =0 ; i< boxes.length; i++) {
        if(boxes[i] === '1') {
            count++;
            totalCount+= i;
        }
    };
    let returnArr = new Array(boxes.length).fill(0);
    for(i=0; i< boxes.length; i++) {
        returnArr[i] = totalCount;
        if(boxes[i] === "1") {
            completed++;
            count --;
        }
        totalCount = totalCount -count + completed;
    }
    return returnArr
};