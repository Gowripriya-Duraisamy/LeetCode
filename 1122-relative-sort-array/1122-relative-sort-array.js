/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const arr2Map = new Map();
    const arr = [];
    const resultArr = [];
    for(let i=0; i<arr2.length; i++) {
        arr2Map.set(arr2[i], 0);
    }
    for(let i=0; i<arr1.length; i++) {
        if(arr2Map.has(arr1[i])) {
            const value = arr2Map.get(arr1[i]) || 0;
            arr2Map.set(arr1[i] , value+1);
        } else {
            arr.push(arr1[i]);
        }
    }
    for(let i=0; i<arr2.length; i++) {
      resultArr.push(...Array(arr2Map.get(arr2[i])).fill(arr2[i]));
    }
    resultArr.push(...arr.sort((a,b) => a-b));
    return resultArr;
};