/**
 * @param {number[]} nums
 * @return {number}
 */
/*
https://leetcode.com/problems/house-robber-ii/discuss/1234674/Javascript-or-DP-or-Time%3A-O(n)-Space%3A-O(1)
*/
var rob = function(nums) {
    if (nums.length == 1) return nums[0]
    let prev1 = 0, cur1 = 0
    let prev2 = 0, cur2 = 0
    for (let i = 1; i < nums.length; i++) {
        const n1 = nums[i-1]
        const n2 = nums[i]
        cur1 = Math.max(n1 + prev1, prev1 = cur1)
        cur2 = Math.max(n2 + prev2, prev2 = cur2)
    }
    return Math.max(cur1, cur2)
};