/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0,
    fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) break;
  }
  let newSlow = 0;
  while (slow !== newSlow) {
    slow = nums[slow];
    newSlow = nums[newSlow];
  }
  return newSlow;
};