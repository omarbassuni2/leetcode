/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a,b) => { return a-b;});
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    console.log(arr, arr[mid]);
    if(arr.length % 2 == 0)     return (arr[mid] + arr[mid+1]) / 2;
    else                        return arr[mid];
};