/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let resultIndex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] >= target) {
        resultIndex = mid;
        right = mid-1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      }
    }
    return resultIndex;
  };

  potions = potions.sort((a, b) => a - b);
    
  for (let i = 0; i < spells.length; i++) {
    const startVal = Math.ceil(success / spells[i]);
    const index = binarySearch(potions, startVal);
    spells[i] = index >= 0 ? potions.length - index : 0;
  }
    
  return spells;
};