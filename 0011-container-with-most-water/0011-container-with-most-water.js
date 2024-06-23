/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1, max = 0;
    while(left < right) {
        const curr = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, curr);
        if(height[left] < height[right]) left  += 1;
        else                             right -= 1;
    }
    return max;
};