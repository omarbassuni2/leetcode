/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while(left < right) {
        const sum = numbers[left] + numbers[right];
        if(sum === target)   return [left + 1, right + 1];
        if(sum > target)    right -= 1;
        else                left += 1;
    }
};