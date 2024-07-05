/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
    [1,2,3,4]
    [0 , 2 , 6,24]
    [24, 12, 4,0 ]
*/
var productExceptSelf = function(nums) {
    const output = [];
    let left = 1, right = 1;
    nums.forEach((num, i) => {
        output[i] = left;
        left *= num;
    });
    const rightArr = []
    for(let i = nums.length - 1; i >= 0; i -= 1) {
        rightArr[i] = right;
        right *= nums[i];
        output[i] *= rightArr[i];
    }
    return output;
};