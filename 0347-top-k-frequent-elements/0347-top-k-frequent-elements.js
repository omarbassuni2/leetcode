/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hashMap = {};
    nums.forEach((n) => {
        if(hashMap[n]) hashMap[n] += 1;
        else           hashMap[n] = 1;
    });
    const mapConvertedToArr = Object.entries(hashMap).map(([k, v]) => [k, v]);
    return mapConvertedToArr.sort((a,b) => b[1]-a[1]).slice(0, k).map((a) => a[0]);
};