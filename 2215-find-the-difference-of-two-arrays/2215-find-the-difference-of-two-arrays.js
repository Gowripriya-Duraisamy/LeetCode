/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const ans1 = new Set();
    const ans2 = new Set();
    const m1 = new Map();
    const m2 = new Map();
    for (let i = 0; i < nums1.length; i++) {
        m1.set(nums1[i], 1);
    }
    for (let i = 0; i < nums2.length; i++) {
        m2.set(nums2[i], 1);
    }
    for (let i = 0; i < nums1.length; i++) {
        if (!m2.get(nums1[i])) ans1.add(nums1[i])
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!m1.get(nums2[i])) ans2.add(nums2[i]);
    }

    return [[...ans1], [...ans2]]

};