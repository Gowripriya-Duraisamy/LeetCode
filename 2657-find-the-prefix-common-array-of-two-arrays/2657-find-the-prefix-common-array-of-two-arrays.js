/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const resultArr = [];
  let alreadyPrefixedCount = 0;
  const map = new Map();

  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) {
      alreadyPrefixedCount++;
    } else {
        map.get(A[i]) ? alreadyPrefixedCount++ : map.set(A[i], 1)
        map.get(B[i]) ? alreadyPrefixedCount++ : map.set(B[i], 1)
    }
    resultArr.push(alreadyPrefixedCount);
  }
  return resultArr;
};