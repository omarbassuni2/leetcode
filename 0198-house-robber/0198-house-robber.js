/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // Nums:  [2,7,            9,          3, 1]
    // Dp: Max(2, 2 + 10, 2 + 3, 2 + 1)  Max(7, 7 + 3, 7 + 1)    Max(9, 9 + 1) 3 1
    if(nums.length <= 2)    return Math.max(...nums);
    const len = nums.length;
    const dp = new Array(len).fill(0);
    dp[len - 1] = nums[len - 1], dp[len - 2] = nums[len - 2];
    let max = Math.max(...dp.slice(len - 2));
    for(let i = len - 3; i >= 0; i -= 1) {
        for(let j = i + 2; j < len; j += 1) {
            dp[i] = Math.max(dp[i], nums[i], dp[j] + nums[i]);
        }
        max = Math.max(max, dp[i]);
    }
    console.log(dp)
    return max;
};