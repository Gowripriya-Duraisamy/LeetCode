/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
   const resultArr = [];

    const checkIsArithmetic  = (arr) => {
        arr.sort((a,b) => a-b);
        const diff = Math.abs(arr[1]) - Math.abs(arr[0]);
        for(let i=1; i<arr.length - 1; i++) {
            if(Math.abs(arr[i+1]) - Math.abs(arr[i]) !== diff) return false
        }
        return true;
    }

    for(let i=0; i<l.length; i++) {
        resultArr.push(checkIsArithmetic(nums.slice(l[i], r[i] + 1)));
    }
    return resultArr;;
};